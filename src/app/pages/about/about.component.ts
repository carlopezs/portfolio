import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JobComponent } from '@components/about/job/job.component';
import { softSkills as dataSoftSkill } from '@data/soft-skills';

import { SoftSkill } from '@models/soft-skill.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [JobComponent, TranslateModule],
  templateUrl: './about.component.html',
})
export default class AboutComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  public softSkills: WritableSignal<SoftSkill[]> = signal([...dataSoftSkill]);

  ngOnInit(): void {
    this.title.setTitle('About Me');

    this.meta.updateTag({
      name: 'description',
      content:
        'I am a passionate software developer with a strong foundation in problem-solving and innovation. My ability to think critically and manage time effectively allows me to build efficient solutions while meeting deadlines.',
    });

    this.meta.updateTag({ name: 'og:title', content: 'Carlos López' });

    this.meta.updateTag({
      name: 'og:descrciption',
      content:
        'I am a passionate software developer with a strong foundation in problem-solving and innovation. My ability to think critically and manage time effectively allows me to build efficient solutions while meeting deadlines.',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://portfolioclopez.netlify.app/images/me/mecoffeanimation.webp`,
    });
  }
}
