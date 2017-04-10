import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyC2I6gd65QWEY4ZsMIy8lSJv1xZy1whKOc",
  authDomain: "pickup-game-754fd.firebaseapp.com",
  databaseURL: "https://pickup-game-754fd.firebaseio.com",
  projectId: "pickup-game-754fd",
  storageBucket: "pickup-game-754fd.appspot.com",
  messagingSenderId: "130415141763"
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
