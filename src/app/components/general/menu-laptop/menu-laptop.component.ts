import { CommonModule, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  OnInit,
  signal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouteApp } from '@models/routes.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'general-menu-laptop',
  imports: [
    MatIcon,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    AvatarComponent,
  ],
  templateUrl: './menu-laptop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'hidden laptop:block'
  }

})
export class MenuLaptopComponent implements OnInit {
  private location = inject(Location);
  private router = inject(Router);

  public routes = input.required<RouteApp[]>();
  public actualRoute = linkedSignal(() => this.location.path());
  public activateRoute = computed(() => {
    if (!this.actualRoute()) return;

    let routePaths = this.actualRoute().split('/');
    routePaths = routePaths.filter((routePath) => routePath != '' && routePath != 'portfolio');


    const principalPath =
      routePaths.length >= 3 ? routePaths[1] : routePaths[0];



    return principalPath == undefined || principalPath == 'portfolio'
      ? 'home'
      : principalPath;
  });

  ngOnInit(): void {
    this.location.onUrlChange((url) => {
      this.actualRoute.set(url);
    });
  }

  public async navigateToOtherPage(route: string) {
    await this.router.navigate([route]);

    this.actualRoute.set(route);
  }
}
