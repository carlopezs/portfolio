import { projects } from './../../data/projects';
import {
  Component,
  computed,
  inject,
  linkedSignal,
  OnInit,
  Signal,
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
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    CommonModule,
    MenuProjectsMobileComponent,
    ProjectsMenuLaptopComponent,
    ToolChipComponent,
    TranslateModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export default class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectsService);
  private activatedRoute = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  public projects: WritableSignal<Project[]> = linkedSignal(() =>
    this.projectService.projects()
  );

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  ngOnInit(): void {
    this.projectService.loadProjects();
    this.title.setTitle('pruebaaa');
    this.meta.updateTag({ name: 'og:title', content: 'pruebaaaa' });

    this.activatedRoute.params.subscribe((value) => {
      const project = this.projectService.chooseProjectToShowByTitle(
        value['title'] == 'all' ? 'teayudoapp' : value['title']
      );

      this.title.setTitle(project!.title ?? 'Projects');
      this.meta.updateTag({
        name: 'description',
        content: project!.description!,
      });
      this.meta.updateTag({ name: 'og:title', content: project!.title! });
      this.meta.updateTag({
        name: 'og:descrciption',
        content: project!.description,
      });
      const imageOg = project!.image.split('/')[2];

      this.meta.updateTag({
        name: 'og:image',
        content: `https://portfolioclopez.netlify.app/images/projects/${imageOg}`,
      });
    });
  }
}
