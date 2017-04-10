import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {
  gameId: string;
  gameToDisplay: Game;

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
          this.gameId = urlParameters['id'];
        }); //finds and assigns id to gameId
         this.gameService.getGameById(this.gameId).subscribe(dataLastEmittedFromObserver => {
         this.gameToDisplay = new Game
         (dataLastEmittedFromObserver.sport,
         dataLastEmittedFromObserver.players,
         dataLastEmittedFromObserver.location,
         dataLastEmittedFromObserver.date,
         dataLastEmittedFromObserver.time)
       })
  }

}
