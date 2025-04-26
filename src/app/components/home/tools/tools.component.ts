import { ToolHomeComponent } from '@components/home/tools/tool-home/tool-home.component';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { Tool } from '@models/tools.model';
import { tools as dataTools } from '@data/tools';
import { AvatarComponent } from '@components/general/avatar/avatar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home-tools',
  imports: [ToolHomeComponent, AvatarComponent, TranslateModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {
  public tools: WritableSignal<Tool[]> = signal([...dataTools]);
}
