import { Routes } from '@angular/router';
import { CommitsComponent } from './components/commits/commits.component';

export const routes: Routes = [
  { path: ':project', component: CommitsComponent }
];
