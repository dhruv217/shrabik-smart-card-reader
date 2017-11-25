import { Injectable, OnInit } from '@angular/core';
import { NFC, TAG_ISO_14443_3, TAG_ISO_14443_4, KEY_TYPE_A, KEY_TYPE_B } from 'nfc-pcsc';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NfcService implements OnInit {

  private data = new Subject<any>();
  cardData$ = this.data.asObservable();

  readers: Array<any> = [];
  card: any;

  constructor() { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
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
        this.data.next(payload);
      });
      reader.on('error', async error => {
        console.log('Reader Error Occured :', error);
      });
    });
  }

}
