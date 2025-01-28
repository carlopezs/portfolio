import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent { }
