import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { AccountComponent } from './account/account.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
>>>>>>> 0e26d0ff354dfee37c8238831dbf41d4fbdfc9e3

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:id',
    component: GameDetailComponent
<<<<<<< HEAD
  },
  {
    path: 'profile',
    component: ProfileComponent
=======
>>>>>>> 0e26d0ff354dfee37c8238831dbf41d4fbdfc9e3
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
