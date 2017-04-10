import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesComponent } from './games/games.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:id',
    component: GamesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
