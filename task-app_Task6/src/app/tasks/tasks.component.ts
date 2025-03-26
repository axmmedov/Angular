import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Tasks List</h1>
    <ul>
      <li><a routerLink="/task/1">Task 1</a></li>
      <li><a routerLink="/task/2">Task 2</a></li>
    </ul>
  `,
  styles: []
})
export class TasksComponent {}