import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './app.routing';
import { GamesComponent } from './games/games.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AccountComponent } from './account/account.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { AddGameComponent } from './add-game/add-game.component';
>>>>>>> 0e26d0ff354dfee37c8238831dbf41d4fbdfc9e3

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
<<<<<<< HEAD
    ProfileComponent
=======
    AddGameComponent
>>>>>>> 0e26d0ff354dfee37c8238831dbf41d4fbdfc9e3
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
