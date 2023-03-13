import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService {

  constructor(private route: Router) { }

  checkLocal(){
    return localStorage.getItem('usertype')
  }

  if(this.checkLocal()){
    return true;
  }

  return false;

}
