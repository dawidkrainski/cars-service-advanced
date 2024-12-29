import { Component, EventEmitter,Input,Output  } from '@angular/core';
import { Car } from '../models/car';
@Component({
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html',
})
export class CarTableRowComponent {
@Input() car: Car;
@Output() removedCar = new EventEmitter<Car>();


  removeCar(car, event) {
    event.stopPropagation();
    this.removedCar.emit(this.car);
  }

}
