import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tool } from '@models/tools.model';

@Component({
  selector: 'home-tool',
  imports: [],
  templateUrl: './tool-home.component.html',
  styleUrl: './tool-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'cursor-pointer justify-center space-y-3 hover:scale-110'
  }
})
export class ToolHomeComponent {

  public tool = input.required<Tool>();

 }
