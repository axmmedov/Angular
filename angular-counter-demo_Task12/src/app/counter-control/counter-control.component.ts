import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-control',
  standalone: true,
  template: `
    <button (click)="counterService.increment()">Increment</button>
    <button (click)="counterService.decrement()">Decrement</button>
    <button (click)="counterService.reset()">Reset</button>
  `
})
export class CounterControlComponent {
  constructor(public counterService: CounterService) {}
}