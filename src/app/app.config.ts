import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LottieModule} from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(LottieModule.forRoot({player: playerFactory}))]
};
