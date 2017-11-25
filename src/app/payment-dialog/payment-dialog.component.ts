import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import sha512 from 'crypto-js/sha512';
import * as electron from 'electron';
// const remote = require('electron').remote;
const BrowserWindow = electron.remote.BrowserWindow;


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {

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
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
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
    /* const formData: FormData = new FormData();
    formData.append('key', this.key);
    formData.append('txnid', transactionId);
    formData.append('amount', this.amount);
    formData.append('productinfo', 'Wallet Recharge');
    formData.append('surl', '/');
    formData.append('hash', hash);
    formData.append('firstname', this.user.firstname);
    formData.append('email', this.user.email);
    formData.append('phone', this.user.phone); */
    const stringFormData =
      'key=' + this.key +
      '&txnid=' + transactionId +
      '&amount=' + this.amount +
      '&productinfo=Wallet Recharge' +
      '&surl=/' +
      '&hash=' + '[' + hash.words + ']' +
      '&firestname=' + this.user.firstname +
      '&email=' + this.user.email +
      '&phone=' + this.user.phone ;
    const paymentWindow = new BrowserWindow({width : 1000, height: 600});
    paymentWindow.loadURL('https://test.payu.in/_payment', {
      postData: [{
        type: 'rawData',
        bytes: Buffer.from(stringFormData)
      }],
      extraHeaders: 'Content-Type: application/x-www-form-urlencoded'
    });
    /* const req = this.http.post('https://test.payu.in/_payment', formData, { responseType: 'text', observe: 'response'  })
    .subscribe(
      res => {
        console.log(res);
      },
        err => {
          console.log('error occured: ', err);
        }
      ); */
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
