import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService implements CanActivate{

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(localStorage.getItem('usertype')){
      return true;
    }
    // if(localStorage.getItem('token')){
    //   return true;
    // }
    else{
      this.route.navigate(['/'])

      return false;
    }
  }
}
