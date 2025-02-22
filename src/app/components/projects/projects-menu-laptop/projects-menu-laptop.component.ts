import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  Signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
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
export class ProjectsMenuLaptopComponent implements OnInit, AfterViewInit {
  private projectService = inject(ProjectsService);
  private router = inject(Router);
  public projects = input.required<Project[]>();
  public virtualScroll = viewChild(CdkVirtualScrollViewport);

  public projectToShow: Signal<Project> = computed(() =>
    this.projectService.projectToShow()
  );

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const index = this.projectToShow().id - 1;

    setTimeout(() => {

      const scrollOffset = this.virtualScroll()?.measureScrollOffset('bottom')! + this.virtualScroll()!.getDataLength() * 70;

      console.log(scrollOffset);
      console.log(scrollOffset / this.virtualScroll()!.getDataLength() );

      this.virtualScroll()?.scrollToOffset(
        index *
          (scrollOffset /
            this.virtualScroll()!.getDataLength()),
        'smooth'
      );
    }, 1);
  }

  public chooseProjectToShowByTitle(title: string) {
    this.router.navigate(['projects', title]);
  }
}
