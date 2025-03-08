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
import { MenuProjectsMobileComponent } from '@components/projects/projects-menu-mobile/projects-menu-mobile.component';
import { ProjectsMenuLaptopComponent } from '@components/projects/projects-menu-laptop/projects-menu-laptop.component';
import { ToolChipComponent } from '@components/projects/tool-chip/tool-chip.component';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    CommonModule,
    MenuProjectsMobileComponent,
    ProjectsMenuLaptopComponent,
    ToolChipComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export default class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectsService);
  private activatedRoute = inject(ActivatedRoute);
  private title = inject(Title);

  public projects: WritableSignal<Project[]> = linkedSignal(() =>
    this.projectService.projects()
  );

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  ngOnInit(): void {
    this.projectService.loadProjects();
    this.activatedRoute.params.subscribe((value) => {
      if (value['title'] == 'all') {
        this.title.setTitle(this.projectToShow().title);
        return;
      }
      this.title.setTitle(value['title']);
      this.projectService.chooseProjectToShowByTitle(value['title']);
    });
  }
}
