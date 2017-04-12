import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { Court } from './court.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CourtService {
  games: FirebaseListObservable<any[]>;
  courts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.games = angularFire.database.list('games')
    this.courts = angularFire.database.list('courts')
  }

  getCourt(){
    return this.courts;
  }
  getCourtById(chosenCourtId: string){
   return this.angularFire.database.object('courts/' + chosenCourtId);
 }
  addCourt(newCourt: Court){
    this.courts.push(newCourt);
  }
}
