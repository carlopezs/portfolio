import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SocialNetWork } from '@models/social-network.model';


@Component({
  selector: 'presentation-button',
  imports: [],
  templateUrl: './button-presentation.component.html',
  styleUrl: './button-presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'animate-fade-right border py-2 px-4 rounded text-center hover:bg-secondary hover:border-secondary cursor-pointer'
  }
})
export class ButtonPresentationComponent {

  public socialNetwork = input.required<SocialNetWork>();



}
