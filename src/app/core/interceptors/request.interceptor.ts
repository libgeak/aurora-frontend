import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private spinnerService: NgxSpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let customRequest = request.clone({
      headers:
        request.headers
          .set('Access-Control-Allow-Origin', '*')
          .set('Content-Type', 'application/json')
    })
    this.spinnerService.show()
    return next.handle(customRequest);
  }
}
