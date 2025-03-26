import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  template: `
    <h1>Angular 19 To-Do List</h1>
    <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Yangi vazifa qo'shing">
    <button (click)="addTask()">Qo'shish</button>

    <ul>
      @for (task of tasks; track task) { 
        <li>{{ task }} <button (click)="removeTask(task)">❌</button></li> 
      }
    </ul>

    @if (tasks.length === 0) { 
      <p>Hozircha vazifalar yo‘q!</p> 
    }
  `,
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

  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
