import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

export const appConfig: ApplicationConfig = {
  providers: [

    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideServerRouting(serverRoutes),
    provideClientHydration(withEventReplay())]
};
