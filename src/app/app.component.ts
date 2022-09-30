import { Component } from '@angular/core';
import { CARS } from './cars';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cars';

  cars: Car[] = CARS;

  selectedCar!: Car;
  show(car: Car): void {
    this.selectedCar = car;
  }
}
