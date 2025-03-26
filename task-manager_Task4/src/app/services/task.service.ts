import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Xizmatni global qilish
})
export class TaskService {
  private tasks: string[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
