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
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { RouteApp } from '@models/routes.model';
import { MenuLaptopComponent } from '../menu-laptop/menu-laptop.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'app/services/language.service';

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
    MatButtonModule,
    MatMenuModule,
    MenuLaptopComponent,
    TranslateModule,
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
  private languageService = inject(LanguageService)

  public isOpenSideNav = signal(false);
  public routes = input.required<RouteApp[]>();
  public actualRoute = linkedSignal(() => this.location.path());
  public languages = [
    {
      code: 'en',
      language: 'English',
    },
    {
      code: 'es',
      language: 'Spanish',
    },
  ];
  public activateRoute = computed<string | undefined>(() => {
    if (!this.actualRoute()) return 'home';

    let routePaths = this.actualRoute().split('/');
    routePaths = routePaths.filter(
      (routePath) => routePath != '' && routePath != 'portfolio'
    );

    const principalPath =
      routePaths.length >= 3 ? routePaths[1] : routePaths[0];

    return principalPath == undefined || principalPath == 'portfolio'
      ? 'home'
      : principalPath;
  });

  public toogleSideNav() {
    this.isOpenSideNav.update((value) => !value);
  }

  public navigateToOtherSection(route: string) {
    this.actualRoute.set(route);
    this.isOpenSideNav.set(false);
  }

  public currentLang = linkedSignal(()=> this.languages.find((lang)=> lang.code == this.languageService.currentLanguage() ) ?? this.languages[0]);

  public changeLanguage(codeLang:string) {
    this.languageService.changeLanguage(codeLang);
  }
}
