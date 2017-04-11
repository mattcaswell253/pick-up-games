import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [GameService, AccountService]

})
export class ProfileComponent implements OnInit {
  games:FirebaseListObservable<any[]>;
  accounts:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor (private router: Router, private gameService: GameService, private accountService: AccountService) { }

  ngOnInit() {
      this.games = this.gameService.getGames();
      this.accounts = this.accountService.getAccounts();
  }

}
