import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private waiting: WaitingService
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 404:
            this.toastr.error('One or more resources not found', '404')
            break;
        }

        this.waiting.WaitingEnabled = false;
        throw err;
      })
    );
  }
}
