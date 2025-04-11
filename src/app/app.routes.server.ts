// app.routes.server.ts
import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProjectsService } from './services/projects.service';
export const serverRoutes: ServerRoute[] = [


  {
    path: '',
    renderMode: RenderMode.Prerender,
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

    renderMode: RenderMode.Prerender,
  },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
