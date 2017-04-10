import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.games = angularFire.database.list('games')
  }

  getGames(){
    return this.games;
  }

  getGameById(chosenGameId: string){
   return this.angularFire.database.object('games/' + chosenGameId);
 }

 addGame(newGame: Game){
   this.games.push(newGame);
 }

}
