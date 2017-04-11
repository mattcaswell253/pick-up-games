import { Component, OnInit  } from '@angular/core';
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
  account:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.account = this.accountService.getAccounts();
  }

  submitForm(name: string, username: string, email: string, password: string) {
    var newAccount: Account = new Account(name, username, email, password);
    this.accountService.addAccount(newAccount);
  }
}
