import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouteApp } from '@models/routes.model';

import { MenuMobileComponent } from '@components/general/menu-mobile/menu-mobile.component';
import { MenuLaptopComponent } from '@components/general/menu-laptop/menu-laptop.component';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layaout',
  imports: [RouterOutlet, MenuMobileComponent],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.scss',
  host: {
    '(window:resize)': 'verifySizeScreen()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayaoutComponent {
  private platformId = inject(PLATFORM_ID);
  private translate = inject(TranslateService);

  private appRef = inject(ApplicationRef);

  private title = inject(Title);

  private windowWith = linkedSignal(() =>
    this.isExecuteInBrowser() ? window.innerWidth : 1024
  );

  public isMobile = computed(() => this.windowWith() <= 1023);

  public isOpenSideNav = signal(false);

  public isExecuteInBrowser = signal(isPlatformBrowser(this.platformId));

  public routes: WritableSignal<RouteApp[]> = signal([
    {
      name: 'Home',
      route: '/',
      title: 'home',
      icon: 'home',
    },
    {
      name: 'About Me',
      route: '/about',
      title: 'about',
      icon: 'self_improvement',
    },
    {
      name: 'Projects',
      route: `/projects/${'all'}`,
      title: 'project',
      icon: 'work_history',
    },
    {
      name: 'Certificates',
      route: '/certificates',
      title: 'certificates',
      icon: 'badge',
    },
  ]);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWith.set(window.innerWidth);
    }


  }

  public verifySizeScreen() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWith.set(window.innerWidth);
    }
  }
}
