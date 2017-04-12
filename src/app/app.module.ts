import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { GamesComponent } from './games/games.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AccountComponent } from './account/account.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditPlayersComponent } from './edit-players/edit-players.component';
import { MapComponent } from './map/map.component';
import { CourtDetailsComponent } from './court-details/court-details.component';
import { TwitterComponent } from './twitter/twitter.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountComponent,
    GamesComponent,
    GameDetailComponent,
    ProfileComponent,
    AddGameComponent,
    EditPlayersComponent,
    MapComponent,
    CourtDetailsComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_yi8XR-EogyolwReGVfkZdXHzO4ESvGw'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
