import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

// const Twit = require('twit');

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit {
  account:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  private T;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.account = this.accountService.getAccounts();
    // this.T = new Twit({
    //   consumer_key:         'oypNKIloGeMbadqaL72MU20yk',
    //   consumer_secret:      'zPRe2pPm5ViDXTuZTXXTVeVaJorh3gbAL25Wsi43s8ftvuqxUn',
    //   access_token:         '851854992117911552-zBQBHhoSbthU0cXxAikBDIP6YLgpTiS',
    //   access_token_secret:  'XJxuq6Fs2Vvk6wQMndQwOiNFRhC39RIvITa3Uwoc6Qdz8',
    //   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    //   })

      var params = {
        q: 'basketball since:2017-01-01',
        count: 10
      }

      this.T.get('search/tweets', { q: 'basketball since:2017-01-01', count: 10}, gotData);

      var gotData = function(err, data, response) {
        console.log(data);
      };
  }

  submitForm(name: string, username: string, email: string, password: string) {
    var newAccount: Account = new Account(name, username, email, password);
    this.accountService.addAccount(newAccount);
  }
}
