import { Component, computed, HostListener, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { RouteApp } from '@models/routes.model';

@Component({
  selector: 'app-layaout',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatExpansionModule,
    MatListModule,
  ],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.scss',
})
export class LayaoutComponent {
  public openSideNav = signal(false);

  private windowWith = signal(window.innerWidth);

  public isMobile = computed(() => window.innerWidth <= 500);

  public routes: WritableSignal<RouteApp[]> = signal([
    {
      name: 'Home',
      route: '/',
      icon: 'home',
    },
    {
      name: 'About Me',
      route: '/about',
      icon: 'self_improvement',
    },
    {
      name: 'Projects',
      route: '/projects',
      icon: 'work_history',
    },
    {
      name: 'Certificates',
      route: '/certificates',
      icon: 'badge',
    },
  ]);

  ngOnInit(): void {
    console.log(this.routes());
  }

  public toogleSideNav() {
    this.openSideNav.update((value) => !value);
  }

  public navigateToOtherSection(route: string) {
    this.openSideNav.set(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

     this.windowWith.set(window.innerWidth);
  }
}
