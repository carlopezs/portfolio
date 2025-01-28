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
  selector: 'projects-menu-moblie',
  imports: [CommonModule],
  templateUrl: './projects-menu-mobile.component.html',
  styleUrl: './projects-menu-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'flex grow justify-start h-20 w-full overflow-x-scroll scrollbar-hide overflow-hidden laptop:hidden'
  }
})
export class MenuProjectsMobileComponent {
  private projectService = inject(ProjectsService);

  public projects = input.required<Project[]>();

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  public chooseProjectToShow(projectID: number) {
    this.projectService.chooseProjectToShow(projectID);
  }
}
