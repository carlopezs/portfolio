import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Project } from '@models/project.model';

@Component({
  selector: 'home-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {


  public isReversed:InputSignal<boolean> = input(false);
  public project:InputSignal<Project> = input.required();



 }
