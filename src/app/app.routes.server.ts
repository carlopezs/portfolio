// app.routes.server.ts
import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProjectsService } from './services/projects.service';

const SUPPORTED_LANGUAGES = ['en', 'es'];


export const serverRoutes: ServerRoute[] = [


  {
    path: '',
    renderMode: RenderMode.Server,


  },
  {
    path: 'about',
    renderMode: RenderMode.Server,
  },
  {
    path: 'projects/:title',
    renderMode: RenderMode.Server,


  },
  {
    path: 'certificates',

    renderMode: RenderMode.Server,
  },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
