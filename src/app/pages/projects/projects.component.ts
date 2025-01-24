import { projects } from './../../data/projects';
import {
  Component,
  computed,
  inject,
  linkedSignal,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProjectsService } from 'app/services/projects.service';
import { Project } from '@models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, ScrollingModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectsService);

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  public projects: WritableSignal<Project[]> = linkedSignal(() =>
    this.projectService.projects()
  );

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  ngOnInit(): void {
    this.projectService.loadProjects();
  }

  public chooseProjectToShow(projectID: number) {
    this.projectService.chooseProjectToShow(projectID);
  }
}
