import { Component } from '@angular/core';
import { LayaoutComponent } from './pages/layaout/layaout.component';


@Component({
  selector: 'app-root',
  imports: [ LayaoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
