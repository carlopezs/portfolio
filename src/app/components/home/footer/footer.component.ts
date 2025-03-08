import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { AvatarComponent } from '@components/general/avatar/avatar.component';
import { SocialNetWork } from '@models/social-network.model';
import { SocialNetworkService } from 'app/services/social-network.service';

@Component({
  selector: 'home-footer',
  imports: [AvatarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  private socialNetworksService = inject(SocialNetworkService);

    public socialNetworks = computed<SocialNetWork[]> (()=> this.socialNetworksService.socialNetworks());
}
