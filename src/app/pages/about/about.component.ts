
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JobComponent } from '@components/about/job/job.component';
import { softSkills as dataSoftSkill } from '@data/soft-skills';

import { SoftSkill } from '@models/soft-skill.model';

@Component({
  selector: 'app-about',
  imports: [JobComponent],
  templateUrl: './about.component.html',
})
export default class AboutComponent implements OnInit {

  private title = inject(Title);

  public softSkills: WritableSignal<SoftSkill[]> = signal([...dataSoftSkill]);

  ngOnInit(): void {
    this.title.setTitle('About Me')
  }
}
