import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NFC, TAG_ISO_14443_3, TAG_ISO_14443_4, KEY_TYPE_A, KEY_TYPE_B } from 'nfc-pcsc';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { WalletService } from './wallet.service';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';


// import * as crypto from 'crypto';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  card: any;
  pdfAddress: any;
  pageInPdf: number;
  certificateVerified = false;
  readers: Array<any> = [];
  serialNumber$: BehaviorSubject<string | null>;
  moneyInWallet: number;
  students$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  walletSubscription: Subscription;

  constructor(
    public fireDb: AngularFireDatabase,
    public snackBar: MatSnackBar,
    public sanitizer: DomSanitizer,
    private walletSrv: WalletService,
    private paymentDialog: MatDialog
  ) {
    this.serialNumber$ = new BehaviorSubject(null);
    this.students$ = this.serialNumber$.switchMap(serialNumber =>
      fireDb.list('/students', ref =>
        serialNumber ? ref.orderByChild('serialNumber').equalTo(serialNumber).limitToFirst(1) : ref
      ).snapshotChanges()
    );
    this.walletSubscription = walletSrv.money$.subscribe(nextValue => {
      console.log('money Updated');
      this.moneyInWallet = Number(nextValue);
      console.log(this.moneyInWallet);
    });
  }

  ngOnInit () {
    // this.getPdfAddressFromDb('SS-10013');
    this.moneyInWallet = Number(this.walletSrv.money);
  }

  addMoney() {
    console.log('setLocalStoreValue');
    this.walletSrv.addMoney = 100;
    this.openDialog();
  }

  menuClose() {
    console.log('menu Closed');
  }

  openDialog(): void {
    const dialogRef = this.paymentDialog.open(PaymentDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The payment dialog was closed');
    });
  }

  ngAfterViewInit () {
    const nfc = new NFC();
    nfc.on('reader', async reader => {
      console.log('Reader Found :', reader.name);
      this.readers.push(reader);
      reader.aid = 'F222222222';
      reader.on('card', async card => {
        // standard nfc tags like Mifare
        if (card.type === TAG_ISO_14443_3) {
          // const uid = card.uid;
          console.log(`card detected`, { reader: reader.name, card });
          this.card = card;
        } else if (card.type === TAG_ISO_14443_4) {
          // Android HCE
          // process raw Buffer data
          // const data = card.data.toString('utf8');
          console.log(`card detected`, { reader: reader.name, card: { ...card } });
          this.card = card;
        } else {
          // not possible, just to be sure
          console.log(`card detected`, { reader: reader.name, card });
        }

        const data = await reader.read(4, 16); // await reader.read(4, 16, 16); for Mifare Classic cards
        console.log(`data read`, { reader: reader.name, data });
        const payload = data.toString('utf-8').trim();
        console.log(`data converted`, payload);
         this.getPdfAddressFromDb(payload);
      });
      reader.on('error', async error => {
        console.log('Reader Error Occured :', error);
      });
    });
  }

  getPdfAddressFromDb (serialNumber: string) {
    serialNumber = this.trimNullChar(serialNumber);
    this.serialNumber$.next(serialNumber);
    this.students$.subscribe(studentObject => {
      console.log(studentObject);
      if (studentObject.length === 1) {
      this.certificateVerified = true;
      this.pdfAddress = studentObject[0].payload.val().certificatePath;
      this.pageInPdf = Number(studentObject[0].payload.val().pageInPdf);
      const snackBarRef = this.snackBar.open('Certificate Verified', 'OK');
      } else {
        const snackBarRef = this.snackBar.open('Unverified Certificate', 'OK');
      }
    });
  }

  trimNullChar(sample: string) {
    let sb = '';
    for ( let i = 0; i < sample.length; i++) {
      if (sample.charCodeAt(i) > 0 && sample.charCodeAt(i) <= 256) {
        sb = sb + sample.charAt(i);
      }
    }
    return sb.toString();
  }

  ngOnDestroy() {
    this.walletSubscription.unsubscribe();
  }

}
