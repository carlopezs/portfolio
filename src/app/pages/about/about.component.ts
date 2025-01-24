
import { Component, signal, WritableSignal } from '@angular/core';
import { JobComponent } from '@components/about/job/job.component';
import { softSkills as dataSoftSkill } from '@data/soft_skills';

import { SoftSkill } from '@models/soft_skill.model';

@Component({
  selector: 'app-about',
  imports: [JobComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public softSkills: WritableSignal<SoftSkill[]> = signal([...dataSoftSkill]);
}
