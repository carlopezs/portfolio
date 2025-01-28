import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouteApp } from '@models/routes.model';

@Component({
  selector: 'general-menu-mobile',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
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
  public isOpenSideNav = signal(false);
  public routes = input.required<RouteApp[]>();

  public toogleSideNav() {
    this.isOpenSideNav.update((value) => !value);
  }

  public navigateToOtherSection(route: string) {
    this.isOpenSideNav.set(false);
  }
}
