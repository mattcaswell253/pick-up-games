import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css'],
  providers: [GameService]
})
export class EditPlayersComponent implements OnInit {
@Input() selectedGame;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  beginUpdatingGame(gameToUpdate: Game, nameAdded: string){
  this.gameService.updateGame(gameToUpdate, nameAdded);
}

}
