import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  Signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@models/project.model';
import { ProjectsService } from 'app/services/projects.service';

@Component({
  selector: 'projects-menu-moblie',
  imports: [CommonModule],
  templateUrl: './projects-menu-mobile.component.html',
  styleUrl: './projects-menu-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex grow justify-start h-20 w-full overflow-x-scroll scrollbar-hide overflow-hidden laptop:hidden',
  },
})
export class MenuProjectsMobileComponent implements AfterViewInit {
  private projectService = inject(ProjectsService);
  private router = inject(Router);
  private elementRef = inject(ElementRef);

  public projects = input.required<Project[]>();

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.scrollLeft =
      (this.projectToShow().id - 1) * 135;
  }

  public chooseProjectToShow(title: string) {
    const titleParam =  title.toLocaleLowerCase().split(' ').join('');
    this.router.navigate(['projects', titleParam]);
  }
}
