import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  newTask: string = '';
  tasks: { id: number; task: string }[] = [];
  private nextId: number = 1;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ id: this.nextId++, task: this.newTask.trim() });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  trackById(index: number, item: { id: number }) {
    return item.id;
  }
}
