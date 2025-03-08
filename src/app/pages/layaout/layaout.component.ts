import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  WritableSignal,
} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouteApp } from '@models/routes.model';

import { MenuMobileComponent } from '@components/general/menu-mobile/menu-mobile.component';
import { MenuLaptopComponent } from '@components/general/menu-laptop/menu-laptop.component';

@Component({
  selector: 'app-layaout',
  imports: [RouterOutlet, MenuMobileComponent, MenuLaptopComponent],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.scss',
  host: {
    '(window:resize)': 'verifySizeScreen()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayaoutComponent {
  private windowWith = signal(window.innerWidth);
  public isOpenSideNav = signal(false);
  public isMobile = computed(() => this.windowWith() <= 1023);

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

  ngOnInit(): void {}

  public verifySizeScreen() {
    this.windowWith.set(window.innerWidth);
  }
}
