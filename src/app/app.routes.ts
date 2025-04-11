import { Routes } from '@angular/router';
import { projectResolver } from './resolvers/project.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'projects/:title',
    loadComponent: () => import('./pages/projects/projects.component'),

  },
  {
    path: 'certificates',
    title:'Certificates',
    loadComponent: () => import('./pages/certificates/certificates.component'),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
