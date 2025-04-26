import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { SoftSkill } from '@models/soft-skill.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'about-job',
  imports: [CommonModule, MatIcon, TranslateModule],
  templateUrl: './job.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {
  public softSkill = input.required<SoftSkill>();
}
