import { Component, computed, inject, OnInit, Signal, WritableSignal } from '@angular/core';
import { Certificate } from '@models/certificate.model';
import { CertificatesService } from 'app/services/certificates.service';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent implements OnInit {


  private readonly certificatesService = inject(CertificatesService);

  public certificates:Signal<Certificate[]> = computed(()=>this.certificatesService.certificates())

  ngOnInit(): void {
    this.certificatesService.loadCertificates();
  }




}
