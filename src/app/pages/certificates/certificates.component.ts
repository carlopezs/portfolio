import { Certificate } from '@models/certificate.model';
import { CertificatesCardComponent } from '@components/certificates/certificates-card/certificates-card.component';
import { CertificatesService } from 'app/services/certificates.service';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-certificates',
  imports: [CertificatesCardComponent, MatIcon, ReactiveFormsModule],
  templateUrl: './certificates.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export default class CertificatesComponent implements OnInit {
  private readonly certificatesService = inject(CertificatesService);
  private title = inject(Title);
  private meta = inject(Meta);


  public allCertificates = computed(() =>
    this.certificatesService.certificates()
  );

  public searchControl = new FormControl();

  public certificates: Signal<Certificate[] | undefined> = toSignal(
    this.searchControl.valueChanges.pipe(
      map((searchTerm: string) => {
        if (!searchTerm) return this.allCertificates();

        const certificatesFiltered = this.allCertificates().filter(
          (certificate) =>
            certificate.courseTitle
              .toLowerCase()
              .includes(searchTerm!.toLowerCase())
        );

        return certificatesFiltered == undefined ? [] : certificatesFiltered;
      })
    )
  );

  constructor(){
    this.title.setTitle('Certificates');
    this.meta.updateTag({
      name: 'description',
      content: 'I have earned multiple certifications that showcase my expertise in both frontend and backend development. ',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Certificates'});
  }

  /*   linkedSignal(()=>this.certificatesService.certificates()) */

  ngOnInit(): void {
    this.certificatesService.loadCertificates();
    this.searchControl.setValue('');


  }
}
