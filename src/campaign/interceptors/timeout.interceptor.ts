import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const timeoutValue = this.reflector.get<number>('timeout', context.getHandler());
    return timeoutValue
      ? next.handle().pipe(
          timeout(timeoutValue),
          catchError(err => (err instanceof TimeoutError ? throwError(() => new RequestTimeoutException()) : throwError(() => err))),
        )
      : next.handle();
  }
}