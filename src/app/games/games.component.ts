import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Game } from '../game.model';
import { GameService } from '../game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {
  games:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  goToDetailPage(clickedGame) {
   this.router.navigate(['games', clickedGame.$key]);
 };

}
