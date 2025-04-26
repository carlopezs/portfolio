import { ButtonPresentationComponent } from './button-presentation/button-presentation.component';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { SocialNetWork } from '@models/social-network.model';
import { TranslateModule } from '@ngx-translate/core';
import { SocialNetworkService } from 'app/services/social-network.service';

@Component({
  selector: 'home-presentation',
  imports: [ButtonPresentationComponent, TranslateModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {
  private socialNetworksService = inject(SocialNetworkService);

  public socialNetworks = computed<SocialNetWork[]>(() =>
    this.socialNetworksService
      .socialNetworks()
      .filter((socialNetwork) => socialNetwork.title !== 'Instagram')
  );
}
