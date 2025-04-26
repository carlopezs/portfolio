import { inject, Injectable, InjectionToken, linkedSignal, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';


export const SERVER_LANG_TOKEN = new InjectionToken<string>('SERVER_LANG_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private cookieService = inject(SsrCookieService);
  private translateService = inject(TranslateService);
  private langServer = inject(SERVER_LANG_TOKEN,{optional:true});

  public currentLanguage = linkedSignal(()=> this.langServer ?? 'en');


  constructor() { }


  public changeLanguage(language:string){
    this.cookieService.set('language',language);
    this.currentLanguage.set(language);


    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }



}
