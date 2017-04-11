import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AccountService {
  accounts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.accounts = angularFire.database.list('account');
  }

  getAccounts() {
    return this.accounts;
  }

  addAccount(newAccount: Account) {
    this.accounts.push(newAccount);
  }

}
