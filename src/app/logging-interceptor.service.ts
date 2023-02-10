import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`Logging request:\
      \nheaders: ${JSON.stringify(req.headers)}\
      \nbody: ${JSON.stringify(req.body)}\
    `);
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(`Logging response:\
            \nheaders: ${JSON.stringify(event.headers)}\
            \nstatus code: ${JSON.stringify(event.status)}\
            \nbody: ${JSON.stringify(event.body)}\
          `);
        }
      })
    );
  }
}
