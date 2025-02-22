
import { Component, signal, WritableSignal } from '@angular/core';
import { JobComponent } from '@components/about/job/job.component';
import { softSkills as dataSoftSkill } from '@data/soft-skills';

import { SoftSkill } from '@models/soft-skill.model';

@Component({
  selector: 'app-about',
  imports: [JobComponent],
  templateUrl: './about.component.html',
})
export default class AboutComponent {
  public softSkills: WritableSignal<SoftSkill[]> = signal([...dataSoftSkill]);
}
