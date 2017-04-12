import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'

@Injectable()
export class TwitterService {

  constructor(private http: Http) { }

  makecall() {
    var headers = new Headers();

    headers.append('basketball', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }
}
