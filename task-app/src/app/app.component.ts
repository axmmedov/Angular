import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // HttpClientModule is NOT needed here
  template: `
    <h1>Task Manager</h1>
    <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Add a new task">
    <ul>
      @for (task of tasks$ | async; track task.id) {
        <li>{{ task.task }}</li>
      }
    </ul>
  `,
  styles: []
})
export class AppComponent {
  newTask = '';
  tasks$;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask).subscribe(() => {
        this.tasks$ = this.taskService.getTasks();
        this.newTask = '';
      });
    }
  }
}
