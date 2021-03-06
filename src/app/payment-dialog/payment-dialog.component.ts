import { Component, OnInit, NgZone, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { WalletService } from '../wallet.service';
import sha512 from 'crypto-js/sha512';
import CryptoJS from 'crypto-js';
import * as electron from 'electron';
// const remote = require('electron').remote;
const BrowserWindow = electron.remote.BrowserWindow;


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})

export class PaymentDialogComponent implements OnInit, OnDestroy  {

  amount: string;
  merchantId = '4934580';
  key = 'gtKFFx';
  salt = 'eCwWELxi';
  user = {
    firstname: '',
    email: '',
    phone: ''
  };
  card = {
    number: '5123456789012346',
    name: '',
    expDate: '05/2020',
    cvv: '123'
  };

  primaryActionDisabled$ = new BehaviorSubject<boolean>(true); // disabled by default

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    private http: HttpClient,
    private wallet: WalletService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.run(() => {
      console.log('paymen-dialog init');
    });
  }

  onNoClick(): void {
    this.zone.run(() => {
      console.log('onNoClick');
      this.dialogRef.close();
    });
  }

  updateZone() {
    this.zone.run(() => {
      console.log('Input Changes');
    });
  }

  ngOnDestroy() {
    this.zone.run(() => {
      console.log('paymen-dialog onDestroy');
    });
  }

  onSubmit() {
    const transactionId = this.makeid();
    const hashSequence =
    this.key + '|' +
    transactionId + '|' +
    this.amount + '|' +
    'Wallet Recharge' + '|' +
    this.user.firstname + '|' +
    this.user.email + '|' +
    '||||||||||' + this.salt;
    console.log(hashSequence);
    const hash = sha512(hashSequence);
    console.log(hash);
    const formData: FormData = new FormData();
    formData.append('key', this.key);
    formData.append('txnid', transactionId);
    formData.append('amount', this.amount);
    formData.append('productinfo', 'Wallet Recharge');
    formData.append('surl', 'https://shrabik-payment.herokuapp.com/success');
    formData.append('furl', 'https://shrabik-payment.herokuapp.com/failure');
    formData.append('hash', hash);
    formData.append('firstname', this.user.firstname);
    formData.append('email', this.user.email);
    formData.append('phone', this.user.phone);
    const req = this.http.post('https://test.payu.in/_payment', formData, { responseType: 'text', observe: 'response'  })
    .subscribe(
      res => {
        this.zone.run(() => {
          console.log(res);
          const paymentWindow = new BrowserWindow({ width: 1200, height: 600 });
          paymentWindow.loadURL(res.url);
          paymentWindow.on('close', () => {
            this.wallet.addMoney = Number(this.amount);
            this.onNoClick();
          });
        });
      },
        err => {
          console.log('error occured: ', err);
        }
      );
  }

  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
