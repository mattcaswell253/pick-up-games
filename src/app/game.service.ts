import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Court } from './court.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  markers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.games = angularFire.database.list('games')
  }

  getGames(){
    return this.games;
  }

  getGameById(chosenGameId: string){
   return this.angularFire.database.object('games/' + chosenGameId);
 }

 updateGame(localUpdatedGame, nameAdded){
    var gameEntryInFirebase = this.getGameById(localUpdatedGame.$key);
    gameEntryInFirebase.update({names: localUpdatedGame.names+", "+nameAdded, numberPlayers: localUpdatedGame.numberPlayers -= 1});
}

 addGame(newGame: Game){
   this.games.push(newGame);
 }
}
