import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WalletService {

  private moneyValue = new Subject<number>();
  money$ = this.moneyValue.asObservable();

  constructor() { }

  set money(value) {
    this.moneyValue.next(Number(value)); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('money', value);
  }

  get money() {
    return localStorage.getItem('money');
  }

  set addMoney(value: number) {
    let moneyInWallet = Number(localStorage.getItem('money'));
    moneyInWallet = moneyInWallet + value;
    this.moneyValue.next(moneyInWallet);
    localStorage.setItem('money', moneyInWallet.toString());
  }

  deductMoney(amount: number) {
    let moneyInWallet = Number(localStorage.getItem('money'));
    moneyInWallet = moneyInWallet - amount;
    this.moneyValue.next(moneyInWallet);
    localStorage.setItem('money', moneyInWallet.toString());
  }

}
