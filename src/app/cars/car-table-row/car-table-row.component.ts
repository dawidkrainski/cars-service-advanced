import {Component, EventEmitter, Input, Output, OnInit, HostListener, Renderer2} from '@angular/core';
import { Car } from '../models/car';
import { HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html',
})
export class CarTableRowComponent implements OnInit {
@Input() car: Car;
@Output() removedCar = new EventEmitter<Car>();
@HostBinding('class.after-deadline') deadline: boolean = false;
@HostListener('mouseenter') onMouseEnter() {
  this.setRemoveButtonStile('red');
}
@HostListener('mouseleave') onMouseLeave() {
  this.setRemoveButtonStile('black');
}

constructor(private el: ElementRef, private renderer: Renderer2) { }


ngOnInit() {
  this.deadline = new Date(this.car.deadline) < new Date();
}


  removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(this.car);
  }

  private setRemoveButtonStile(color: string) {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.remove-btn'), 'color', color);
  }

}
