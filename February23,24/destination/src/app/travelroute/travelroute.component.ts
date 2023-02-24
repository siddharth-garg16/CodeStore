import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travelroute',
  templateUrl: './travelroute.component.html',
  styleUrls: ['./travelroute.component.css']
})
export class TravelrouteComponent {
  @Input() from:string | undefined;
  @Input() to:string | undefined;
}
