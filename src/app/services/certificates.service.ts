import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { certificates } from '@data/certificates';
import { Certificate } from '@models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  private _certificates: WritableSignal<Certificate[]> = signal([]);

  public certificates: Signal<Certificate[]> = computed(() =>
    this._certificates()
  );

  constructor() {}

  public loadCertificates() {
    setTimeout(() => {
      this._certificates.set([...certificates]);
    }, 0);
  }
}
