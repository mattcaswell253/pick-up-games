import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit {
  accounts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  showform: string = "no";
  // showform: string = yes;

  ngOnInit() {
      this.accounts = this.accountService.getAccounts();
  }

  constructor(private router: Router, private accountService: AccountService) { }

  showdiv(element: string) {
    element = "yes";
    this.showform = element;
  }

  submitForm(name: string, username: string, email: string, password: string, photo: string) {
    var newAccount: Account = new Account(name, username, email, password, photo);
    this.accountService.addAccount(newAccount);
    this.showform = "no";
  }
}
