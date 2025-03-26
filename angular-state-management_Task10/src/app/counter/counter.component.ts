import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(`The count is now ${this.count()}`);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}