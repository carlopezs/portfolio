import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@models/project.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home-project',
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {


  public isReversed:InputSignal<boolean> = input(false);
  public project:InputSignal<Project> = input.required();



 }
