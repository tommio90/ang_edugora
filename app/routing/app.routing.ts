import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent }      from '../components/profile/profile.component';
import { WordsComponent }      from '../components/words/words.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'words',
    component: WordsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);