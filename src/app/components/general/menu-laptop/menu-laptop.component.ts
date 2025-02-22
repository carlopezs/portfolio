import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouteApp } from '@models/routes.model';

@Component({
  selector: 'general-menu-laptop',
  imports: [ MatIcon],
  templateUrl: './menu-laptop.component.html',


})
export class MenuLaptopComponent implements OnInit {

  private location = inject(Location);
  private router = inject(Router);

  public routes = input.required<RouteApp[]>();
  public actualRoute = linkedSignal(()=> this.location.path())
  public activateRoute = computed(()=> this.actualRoute().split('/')[1] == ''? 'home': this.actualRoute().split('/')[1])



  ngOnInit(): void {

    this.location.onUrlChange((url)=>{
      this.actualRoute.set(url);
    })
  }

  public navigateToOtherPage(route: string) {
    this.actualRoute.set(route)
    this.router.navigate([route]);
  }
}
