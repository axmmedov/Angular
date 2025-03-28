import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common'; // For async pipe
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [AsyncPipe], // Import AsyncPipe for use in template
  template: `
    <p>Current Count: {{ counterService.count$ | async }}</p>
  `
})
export class CounterDisplayComponent {
  constructor(public counterService: CounterService) {}
}