import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let tokeninzedReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer xx.yy.zz'
      }
    })

    return next.handle(tokeninzedReq)
  }
}
