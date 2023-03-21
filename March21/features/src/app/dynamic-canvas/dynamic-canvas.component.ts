import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';


@Component({
  selector: 'app-dynamic-canvas',
  templateUrl: './dynamic-canvas.component.html',
  styleUrls: ['./dynamic-canvas.component.scss']
})
export class DynamicCanvasComponent {
  @ViewChild('container', {read: ViewContainerRef})
  container!:ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  addDynamicComponent():void{
    const dynamicComponentFcatory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(dynamicComponentFcatory);
  }
}
