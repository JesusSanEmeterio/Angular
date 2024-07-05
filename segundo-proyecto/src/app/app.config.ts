import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ContactoService } from './services/contacto.service';
import { ContactoServiceInterface } from './services/contacto.service.interface';
import { provideHttpClient } from '@angular/common/http';
import { ContactoServiceHttp } from './services/contacto.service.http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
    {provide : ContactoServiceInterface, useClass: ContactoServiceHttp}
  ]
};
