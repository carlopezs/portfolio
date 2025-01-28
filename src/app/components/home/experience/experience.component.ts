
import { ChangeDetectionStrategy, Component, computed, signal, WritableSignal } from '@angular/core';
import { Job } from '@models/job.model';
import { jobs as dataJobs } from '@data/jobs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  private actualIndexJob: WritableSignal<number> = signal(0);

  public jobs: WritableSignal<Job[]> = signal([...dataJobs]);

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
