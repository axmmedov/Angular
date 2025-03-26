import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Yangi vazifa qo'shish">
      <button (click)="addTask()">Qo'shish</button>
      <ul>
        <li *ngFor="let task of tasks; let i = index">
       {{ task }} <button (click)="deleteTask(i)">❌</button>
       </li>
     </ul>

      @if (tasks.length === 0) { <p>Hali hech qanday vazifa yo'q!</p> }
    </div>
  `
})
export class TaskManagerComponent {
  tasks: string[];
  newTask = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
