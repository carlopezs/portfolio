import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Job } from '@models/job.model';
import { SoftSkill } from '@models/soft-skill.model';

@Component({
  selector: 'about-job',
  imports: [CommonModule, MatIcon],
  templateUrl: './job.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {
  public softSkill = input.required<SoftSkill>();
}
