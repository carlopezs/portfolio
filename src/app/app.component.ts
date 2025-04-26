import { Component, Inject, inject, Optional } from '@angular/core';
import { LayaoutComponent } from './pages/layaout/layaout.component';
import {
  LanguageService,
  SERVER_LANG_TOKEN,
} from './services/language.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  imports: [LayaoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private languageService = inject(LanguageService);
  private cookieService = inject(SsrCookieService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
    langServer: string
  ) {

    const lang =
      langServer ??
      (this.cookieService.check('language')
        ? this.cookieService.get('language')
        : 'en');
    console.log(lang);
    this.languageService.changeLanguage(lang);
  }

  ngOnInit(): void {

    console.log({cookie:this.cookieService.get('language') });
  }
}
