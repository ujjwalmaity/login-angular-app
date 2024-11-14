import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authorizationInterceptor } from './util/interceptor/authorization.interceptor';
import { headersInterceptor } from './util/interceptor/headers.interceptor';
import { loggingInterceptor } from './util/interceptor/logging.interceptor';
import { logoutInterceptorProvider } from './util/interceptor/logout.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([authorizationInterceptor, headersInterceptor, loggingInterceptor])
    ),
    [logoutInterceptorProvider],
  ]
};
