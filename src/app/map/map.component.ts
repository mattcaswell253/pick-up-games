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
  zoom: number = 12;
  // initial center position for the map
  lat: number = 47.601407;
  lng: number = -122.307257;

  markers: marker[] = []

  performSearch(): void {
    var apiLink = this.link;
    let currentMarkers:marker[];

  this.http.request(apiLink)
    .subscribe((res: Response) => {
      this.courts = res.json();
      for(var i = 0; i < this.courts.length; i++) {
        if (this.courts[i].city_feature === "Basketball Courts"){
          var newMarker = {
            lat: parseFloat(this.courts[i].latitude),
            lng: parseFloat(this.courts[i].longitude),
            label: this.courts[i].common_name,
            draggable: false
          }
          this.markers.push(newMarker);
        }
      }
    });
    console.log(this.markers);
  }
  ngOnInit() {
    this.performSearch();
  }
  clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker: ' + marker.label + ' at index '+ index);
  }

  constructor(http: Http) {
    this.http = http;
  }

}

interface marker {
  label?: string;
	lat: number;
	lng: number;
	draggable: boolean;
}
