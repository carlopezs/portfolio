import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Job } from '@models/job.model';
import { jobs as dataJobs } from '@data/jobs';
import { Project } from '@models/project.model';
import { ProjectComponent } from '@components/home/project/project.component';
import { projects as dataProjects } from '@data/projects';
import { Tools } from '@models/tools.model';
import { tools as dataTools } from '@data/tools';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    ProjectComponent,
    ProjectComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public tools: WritableSignal<Tools[]> = signal([...dataTools]);

  public projects: WritableSignal<Project[]> = signal([...dataProjects]);

  public jobs: WritableSignal<Job[]> = signal([...dataJobs]);

  private actualIndexJob: WritableSignal<number> = signal(0);

  public actualJob = computed(() => this.jobs()[this.actualIndexJob()]);

  public isLastIndex = computed(
    () => this.actualIndexJob() === this.jobs().length - 1
  );

  public isFirstIndex = computed(() => this.actualIndexJob() === 0);

  public nextJob() {
    if (this.actualIndexJob() === this.jobs().length - 1) return;

    this.actualIndexJob.update((index) => index + 1);
  }

  public previousJob() {
    if (this.actualIndexJob() === 0) return;

    this.actualIndexJob.update((index) => index - 1);
  }
}
