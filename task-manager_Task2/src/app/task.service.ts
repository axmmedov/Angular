import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Xizmatni butun ilova bo'ylab ishlatish uchun Singleton sifatida belgilaymiz
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
