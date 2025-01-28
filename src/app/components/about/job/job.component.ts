import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Job } from '@models/job.model';
import { SoftSkill } from '@models/soft_skill.model';


@Component({
  selector: 'about-job',
  imports: [],
  templateUrl: './job.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {


  public softSkill = input.required<SoftSkill>();

}
