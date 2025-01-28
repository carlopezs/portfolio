import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { Project } from '@models/project.model';
import { ProjectsService } from 'app/services/projects.service';

@Component({
  selector: 'projects-menu-laptop',
  imports: [ScrollingModule, CommonModule],
  templateUrl: './projects-menu-laptop.component.html',
  styleUrl: './projects-menu-laptop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'hidden px-5 flex-grow laptop:flex laptop:w-1/2',
  },
})
export class ProjectsMenuLaptopComponent {
  private projectService = inject(ProjectsService);

  public projects = input.required<Project[]>();

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  public chooseProjectToShow(projectID: number) {
    this.projectService.chooseProjectToShow(projectID);
  }
}
