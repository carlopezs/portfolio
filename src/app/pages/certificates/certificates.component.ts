import { Certificate } from '@models/certificate.model';
import { CertificatesCardComponent } from '@components/certificates/certificates-card/certificates-card.component';
import { CertificatesService } from 'app/services/certificates.service';
import { Component, computed, inject, OnInit, Signal } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [CertificatesCardComponent],
  templateUrl: './certificates.component.html'
})
export default class CertificatesComponent implements OnInit {


  private readonly certificatesService = inject(CertificatesService);

  public certificates:Signal<Certificate[]> = computed(()=>this.certificatesService.certificates())

  ngOnInit(): void {
    this.certificatesService.loadCertificates();
  }




}
