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
  game:FirebaseObjectObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
          this.gameId = urlParameters['id'];
        });
         this.gameService.getGameById(this.gameId).subscribe(dataLastEmittedFromObserver => {
         this.gameToDisplay = new Game
         (dataLastEmittedFromObserver.names,
         dataLastEmittedFromObserver.numberPlayers,
         dataLastEmittedFromObserver.date,
         dataLastEmittedFromObserver.time)
        //  console.log(this.gameToDisplay);

       })
  }

  addPlayer(name: string) {
    this.gameService.getGameById(this.gameId).subscribe(dataLastEmittedFromObserver => {
    this.gameToDisplay = new Game
    (dataLastEmittedFromObserver.names,
    dataLastEmittedFromObserver.numberPlayers,
    dataLastEmittedFromObserver.date,
    dataLastEmittedFromObserver.time)
    dataLastEmittedFromObserver.names.push(name);
  })
}
}
