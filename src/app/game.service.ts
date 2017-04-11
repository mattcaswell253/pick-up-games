import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Marker } from './marker.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  markers: FirebaseListObservable<any[]>;
  arrayToPush: Array<Marker> = [];

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
