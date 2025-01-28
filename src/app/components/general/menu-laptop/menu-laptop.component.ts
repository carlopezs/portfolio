import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteApp } from '@models/routes.model';

@Component({
  selector: 'general-menu-laptop',
  imports: [RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './menu-laptop.component.html',


})
export class MenuLaptopComponent implements OnInit {

  public routes = input.required<RouteApp[]>();

  ngOnInit(): void {
    console.log(this.routes());
  }
}
