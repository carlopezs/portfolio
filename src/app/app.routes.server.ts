// app.routes.server.ts
import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProjectsService } from './services/projects.service';
export const serverRoutes: ServerRoute[] = [
  /* {
    path: '', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Client,
  },
  {
    path: 'about', // This page is static, so we prerender it (SSG)
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'profile', // This page requires user-specific data, so we use SSR
    renderMode: RenderMode.Server,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Server,
  }, */

  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'projects/:title',
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      const projectService = inject(ProjectsService);
      projectService.loadProjects();
      const projectsTitle = projectService.getProjectsTitles();
      return projectsTitle.map((title) => ({ title }));
    },
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
