import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CourtService } from '../court.service';
import { Court } from '../court.model';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [CourtService]
})
export class MapComponent implements OnInit {
  link = 'https://data.seattle.gov/resource/3c4b-gdxv.json?$$app_token=MTNJ2m540epjQwhEl5o9Bjc3q';
  http: Http;
  courts = [];
  // google maps zoom level
  zoom: number = 12;
  // initial center position for the map
  lat: number = 47.601407;
  lng: number = -122.307257;

  markers: marker[] = [];
  court:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  performSearch(): void {
    var apiLink = this.link;
    this.http.request(apiLink)
    .subscribe((res: Response) => {
      this.courts = res.json();
      for(var i = 0; i < this.courts.length; i++) {
        if (this.courts[i].city_feature === "Basketball Courts"){
          var newMarker = {
            lat: parseFloat(this.courts[i].latitude),
            lng: parseFloat(this.courts[i].longitude),
            name: this.courts[i].common_name,
          }
          this.markers.push(newMarker);
          // var newCourt: Court = new Court(
          //   parseFloat(this.courts[i].latitude),
          //   parseFloat(this.courts[i].longitude),
          //   this.courts[i].address,
          //   this.courts[i].common_name
          // );
          // this.courtService.addCourt(newCourt);
        }
      }
    });
    // console.log(this.markers);
  }
  ngOnInit() {
    this.performSearch();
  }
  clickedMarker(marker: marker, index: string) {
    this.router.navigate(['courts', index]);
    console.log('Clicked Marker: ' + marker.name + ' at index '+ index);
  }

  constructor(http: Http, private router: Router, private courtService: CourtService) {
    this.http = http;
  }
}

interface marker {
  name?: string;
	lat: number;
	lng: number;
}
