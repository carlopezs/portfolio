import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Certificate } from '@models/certificate.model';

@Component({
  selector: 'certificates-card',
  imports: [],
  templateUrl: './certificates-card.component.html',
  styleUrl: './certificates-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesCardComponent {
  public certificate = input.required<Certificate>();
}
