import { ChangeDetectionStrategy, Component,  input} from '@angular/core';

import { Certificate } from '@models/certificate.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'certificates-card',
  imports: [TranslateModule],
  templateUrl: './certificates-card.component.html',
  styleUrl: './certificates-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesCardComponent {



  public certificate = input.required<Certificate>();


}
