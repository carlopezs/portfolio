import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'certificates',
    component:CertificatesComponent
  },

];
