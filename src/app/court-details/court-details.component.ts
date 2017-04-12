import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../game.model';
import { Court } from '../court.model';
import { GameService } from '../game.service';
import { CourtService } from '../court.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-court-details',
  templateUrl: './court-details.component.html',
  styleUrls: ['./court-details.component.css'],
  providers: [GameService, CourtService]
})
export class CourtDetailsComponent implements OnInit {
  games:FirebaseListObservable<any[]>;
  courts:FirebaseListObservable<any[]>;
  courtToDisplay: Court;
  courtId: string;

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router, private courtService: CourtService) { }

  ngOnInit() {
    // this.games = this.gameService.getGames();
    // this.route.params.forEach((urlParameters) => {
    //   this.courtId = urlParameters['id'];
    //     }); //finds and assigns id to gameId
    // this.courts = this.courtService.getCourtById(this.courtId).subscribe(dataLastEmittedFromObserver => {
    // this.courtToDisplay = new Court
    // (dataLastEmittedFromObserver.lat,
    // dataLastEmittedFromObserver.lng,
    // dataLastEmittedFromObserver.address,
    // dataLastEmittedFromObserver.name)
    // })
  }

}
