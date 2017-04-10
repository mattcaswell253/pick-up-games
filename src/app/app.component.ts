import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Pick-Up-Games!';
  link = 'https://data.seattle.gov/resource/3c4b-gdxv.json?$$app_token=MTNJ2m540epjQwhEl5o9Bjc3q';
  http: Http;
  courts = [];

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

};
