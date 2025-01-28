import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  WritableSignal,
} from '@angular/core';
import { Tool } from '@models/tools.model';
import { tools as dataTools } from '@data/tools';

@Component({
  selector: 'home-tools',
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {
  public tools: WritableSignal<Tool[]> = signal([...dataTools]);
}
