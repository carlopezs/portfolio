import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { SOCIAL_NETWORKS } from '@data/social-networks';
import { SocialNetWork } from '@models/social-network.model';



@Injectable({ providedIn: 'root' })
export class SocialNetworkService {
  private _socialNetworks: WritableSignal<SocialNetWork[]> = signal([]);

  public socialNetworks: Signal<SocialNetWork[]> = computed(() =>
    this._socialNetworks()
  );

  constructor() {}

  public loadSocialNetworks() {
    setTimeout(() => {
      this._socialNetworks.set([...SOCIAL_NETWORKS]);
    }, 0);
  }
}
