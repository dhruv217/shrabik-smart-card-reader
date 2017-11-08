import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NFC, TAG_ISO_14443_3, TAG_ISO_14443_4, KEY_TYPE_A, KEY_TYPE_B } from 'nfc-pcsc';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';


import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  card: any;
  pdfAddress: any;
  certificateVerified = false;
  readers: Array<any> = [];
  serialNumber$: BehaviorSubject<string | null>;
  students$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;

  constructor(
    public fireDb: AngularFireDatabase,
    public snackBar: MatSnackBar,
    public sanitizer: DomSanitizer
  ) {
    this.serialNumber$ = new BehaviorSubject(null);
    this.students$ = this.serialNumber$.switchMap(serialNumber =>
      fireDb.list('/students', ref =>
        serialNumber ? ref.orderByChild('serialNumber').equalTo(serialNumber).limitToFirst(1) : ref
      ).snapshotChanges()
    );
  }

  ngOnInit () {
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

}
