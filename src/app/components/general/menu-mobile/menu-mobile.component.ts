import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterLink } from '@angular/router';
import { RouteApp } from '@models/routes.model';

@Component({
  selector: 'general-menu-mobile',
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
  ],
  templateUrl: './menu-mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `mat-sidenav {
      width: 285px;
      border-radius: 0;
    }
    `,
})
export class MenuMobileComponent {
  private location = inject(Location);

  public isOpenSideNav = signal(false);
  public routes = input.required<RouteApp[]>();
  public actualRoute = linkedSignal(() => this.location.path());
  public activateRoute = computed(() =>
    this.actualRoute().split('/')[1] == ''
      ? 'home'
      : this.actualRoute().split('/')[1]
  );

  public toogleSideNav() {
    this.isOpenSideNav.update((value) => !value);
  }

  public navigateToOtherSection(route: string) {
    this.actualRoute.set(route)
    this.isOpenSideNav.set(false);
  }
}
