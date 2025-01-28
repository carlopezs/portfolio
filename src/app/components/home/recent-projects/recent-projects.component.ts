import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { Project } from '@models/project.model';
import { projects as dataProjects } from '@data/projects';
import { ProjectComponent } from './project/project.component';
@Component({
  selector: 'home-recent-projects',
  imports: [ProjectComponent],
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent {

  public projects: WritableSignal<Project[]> = signal([...dataProjects]);

 }
