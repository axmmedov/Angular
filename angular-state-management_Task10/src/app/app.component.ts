import { Component } from '@angular/core';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent, CounterComponent],
  template: `
    <h1>Angular 19 State Management</h1>
    <app-todo-input></app-todo-input>
    <app-todo-list></app-todo-list>
    <hr>
    <app-counter></app-counter>
  `,
})
export class AppComponent {}