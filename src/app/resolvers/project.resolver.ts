import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { Project } from '@models/project.model';
import { ProjectsService } from 'app/services/projects.service';

export const projectResolver: ResolveFn<Project | undefined> = (route, state) => {
  const projectService = inject(ProjectsService);
  const title = route.paramMap.get('title');
  console.log(title);
  if (title && title !== 'all') {
    return projectService.chooseProjectToShowByTitle(title);
  }
  return undefined;
};
