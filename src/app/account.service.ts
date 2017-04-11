import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AccountService {
  account: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.account = angularFire.database.list('account');
  }

  getAccounts() {
    return this.account;
  }

  addAccount(newAccount: Account) {
    this.account.push(newAccount);
  }

}
