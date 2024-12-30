import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';


export interface CanDeactivateComponent {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable()
export class FormCanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {


  canDeactivate(component: CanDeactivateComponent): Observable<boolean> | Promise<boolean> | boolean {
  return component.canDeactivate ? component.canDeactivate() : true;

  }
}
