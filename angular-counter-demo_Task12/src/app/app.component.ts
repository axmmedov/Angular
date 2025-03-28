import { Component } from '@angular/core';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterControlComponent } from './counter-control/counter-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterDisplayComponent, CounterControlComponent], // Import child components
  template: `
    <h1>Counter Demo</h1>
    <app-counter-display></app-counter-display>
    <app-counter-display></app-counter-display>
    <app-counter-control></app-counter-control>
  `,
  styles: [`button { margin: 5px; padding: 5px 10px; }`]
})
export class AppComponent {}