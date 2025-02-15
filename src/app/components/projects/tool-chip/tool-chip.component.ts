import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tool } from '@models/tools.model';

@Component({
  selector: 'projects-tool-chip',
  imports: [],
  templateUrl: './tool-chip.component.html',
  styleUrl: './tool-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'flex flex-row max-h-12 min-w-28 items-center justify-center  p-5 rounded-lg border-white border cursor-pointer hover:bg-secondary hover:border-secondary laptop:p-2'
  }
})
export class ToolChipComponent {

  public tool = input.required<Tool>();

}
