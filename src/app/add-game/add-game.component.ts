import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [GameService]
})
export class AddGameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  submitForm(sport: string, players: number, location: string, date: string, time: string) {
    var newGame: Game = new Game(sport, players, location, date, time);
    this.gameService.addGame(newGame);
  }
}
