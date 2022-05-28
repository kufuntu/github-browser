import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'repos',
    loadChildren: () => import('./views/repos').then((m) => m.ReposModule),
  },
  {
    path: 'commits',
    loadChildren: () => import('./views/commits').then((m) => m.CommitsModule),
  },
  { path: '**', redirectTo: '/repos', pathMatch: 'full' },
];
