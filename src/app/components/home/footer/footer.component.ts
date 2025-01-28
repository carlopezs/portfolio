import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
