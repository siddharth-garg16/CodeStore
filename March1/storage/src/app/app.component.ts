import { Component, OnInit, OnDestroy } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  private storageKey = 'user-background';
  private defaultColor = '#ffffff';
  userBackgroundColor = "";

  constructor(private local:LocalStorageService, private session:SessionStorageService,private cookieService:CookieService){}

  ngOnInit(): void {
    this.loadBackgroundPreferences();
    this.cookieService.set('name', 'localhost-codestore');
    this.session.set('time', new Date())
  }
  private loadBackgroundPreferences(): void {
    this.userBackgroundColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor();
  }
  removePreferences(): void {
    this.local.remove(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    this.local.set(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    return this.local.get(this.storageKey) || this.defaultColor;
  }

  ngOnDestroy(){
    this.cookieService.delete('name');
    this.session.remove('time');
  }

}
