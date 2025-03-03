import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouteApp } from '@models/routes.model';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'general-menu-laptop',
  imports: [ MatIcon, CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './menu-laptop.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class MenuLaptopComponent implements OnInit {

  private location = inject(Location);
  private router = inject(Router);

  public routes = input.required<RouteApp[]>();
  public actualRoute = linkedSignal(()=> this.location.path())
  public activateRoute = computed(()=> {


    if (!this.actualRoute()) return ;

    const routePaths = this.actualRoute().split('/');
    const principalPath = routePaths.length > 3? routePaths[2] : routePaths[1]


    return principalPath == '' || principalPath== 'portfolio'? 'home': principalPath
  } )



  ngOnInit(): void {

    this.location.onUrlChange((url)=>{
      this.actualRoute.set(url);
    })
  }

  public async navigateToOtherPage(route: string) {

    await this.router.navigate([route]);

    this.actualRoute.set(route);




  }
}
