import { Certificate } from '@models/certificate.model';
import { CertificatesCardComponent } from '@components/certificates/certificates-card/certificates-card.component';
import { CertificatesService } from 'app/services/certificates.service';
import {
  Component,
  computed,
  inject,
  linkedSignal,
  OnInit,
  Signal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  FormControl,
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-certificates',
  imports: [CertificatesCardComponent, MatIcon, ReactiveFormsModule],
  templateUrl: './certificates.component.html',
})
export default class CertificatesComponent implements OnInit {
  private readonly certificatesService = inject(CertificatesService);

  public allCertificates = computed(() =>
    this.certificatesService.certificates()
  );

  public searchControl = new FormControl();

  public certificates: Signal<Certificate[] | undefined> = toSignal(
    this.searchControl.valueChanges.pipe(
      map((searchTerm:string) => {

        if (!searchTerm) return this.allCertificates();

        const certificatesFiltered = this.allCertificates().filter(
          (certificate) => certificate.courseTitle.toLowerCase().includes(searchTerm!.toLowerCase())
        );

        return certificatesFiltered == undefined ? [] : certificatesFiltered;
      })
    )
  );

  /*   linkedSignal(()=>this.certificatesService.certificates()) */

  ngOnInit(): void {
    this.certificatesService.loadCertificates();
    this.searchControl.setValue('');
  }


}
