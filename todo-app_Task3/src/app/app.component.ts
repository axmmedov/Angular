import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>To-Do List</h1>
    <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Add a new task">
    <ul>
      @for (task of tasks; track task) {
        <li>{{ task }}</li>
      }
    </ul>
    @if (tasks.length === 0) {
      <p>No tasks yet!</p>
    }
  `,
  styles: [`
    h1 {
      color: #333;
      text-align: center;
    }
    input {
      display: block;
      margin: 10px auto;
      padding: 5px;
      width: 200px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      width: 200px;
      margin: 0 auto;
    }
    li {
      padding: 5px;
      border-bottom: 1px solid #ddd;
    }
    p {
      text-align: center;
      color: #666;
    }
  `]
})
export class AppComponent {
  tasks: string[] = [];
  newTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }
}