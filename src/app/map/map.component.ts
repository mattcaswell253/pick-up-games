import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Http, Response } from '@angular/http';
import { GameService } from '../game.service';
import { Marker } from '../marker.model';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GameService]
})
export class MapComponent implements OnInit {
  link = 'https://data.seattle.gov/resource/3c4b-gdxv.json?$$app_token=MTNJ2m540epjQwhEl5o9Bjc3q';
  http: Http;
  courts = [];
  // google maps zoom level
  zoom: number = 10;
  // initial center position for the map
  lat: number = 47.5636;
  lng: number = -122.358;
  markers: marker[] = [
   {
     label: 'A',
     lat: 47.6216,
     lng: -122.30524,
     draggable: true
   },
   {
     label: 'B',
     lat: 47.629173,
     lng: -122.359947,
     draggable: false
   },
   {
     label: 'C',
     lat: 47.682453,
     lng: -122.337787,
     draggable: true
   }
 ]



  constructor(http: Http) {
    this.http = http;
  }

  performSearch(): void {
    var apiLink = this.link;
    let currentMarkers:marker[];

  this.http.request(apiLink)
    .subscribe((res: Response) => {
      this.courts = res.json();
      for(var i = 0; i < this.courts.length; i++) {
        var newMarker = {
          lat: this.courts[i].latitude,
          label: this.courts[i].common_name,
          lng: this.courts[i].longitude,
          draggable: false
        }
        console.log(newMarker);
        this.markers.push(newMarker);
      }
    });
    console.log(this.markers);
  }


  ngOnInit() {
    this.performSearch();
  }
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
