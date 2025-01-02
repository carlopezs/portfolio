import { Component, signal, WritableSignal } from '@angular/core';
import { JobComponent } from '@components/about/job/job.component';
import { jobs as dataJobs } from '@data/jobs';
import { Job } from '@models/job.model';

@Component({
  selector: 'app-about',
  imports: [JobComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public jobs: WritableSignal<Job[]> = signal([...dataJobs]);
}
