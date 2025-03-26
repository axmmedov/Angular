import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Vazifa Menejeri</h2>
      <input [(ngModel)]="newTask" placeholder="Yangi vazifa qo‘shing" (keyup.enter)="addTask()" />
      <button (click)="addTask()">Qo‘shish</button>
      <ul>
        <li *ngFor="let task of tasks; let i = index">
          {{ task }}
          <button (click)="deleteTask(i)">❌</button>
        </li>
      </ul>
      <p *ngIf="tasks.length === 0">Vazifalar yo‘q!</p>
    </div>
  `,
  styles: [`
    .container { text-align: center; max-width: 400px; margin: auto; }
    input { width: 80%; padding: 8px; margin: 10px 0; }
    button { margin-left: 5px; }
    ul { list-style: none; padding: 0; }
    li { background: #f4f4f4; padding: 10px; margin: 5px 0; display: flex; justify-content: space-between; }
  `]
})
export class TaskManagerComponent {
  tasks: string[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
