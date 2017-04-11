import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

const Twit = require('twit');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Pick-Up-Games!';
  link = 'https://data.seattle.gov/resource/3c4b-gdxv.json?$$app_token=MTNJ2m540epjQwhEl5o9Bjc3q';
  http: Http;
  courts = [];
  private T;

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(): void {
    var apiLink = this.link;


  this.http.request(apiLink)
    .subscribe((res: Response) => {
      this.courts = res.json();
      console.log(this.courts);
    });
  }

  ngOnInit() {
  this.T = new Twit({
    consumer_key:         'oypNKIloGeMbadqaL72MU20yk',
    consumer_secret:      'zPRe2pPm5ViDXTuZTXXTVeVaJorh3gbAL25Wsi43s8ftvuqxUn',
    access_token:         '851854992117911552-zBQBHhoSbthU0cXxAikBDIP6YLgpTiS',
    access_token_secret:  'XJxuq6Fs2Vvk6wQMndQwOiNFRhC39RIvITa3Uwoc6Qdz8',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })
  }
};
