import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  template: `
    <h2>Add Todo</h2>
    <input #todoInput (keyup.enter)="addTodo(todoInput.value); todoInput.value=''">
    <button (click)="addTodo(todoInput.value); todoInput.value=''">Add</button>
  `,
})
export class TodoInputComponent {
  private todoService = inject(TodoService);

  addTodo(todo: string) {
    if (todo.trim()) {
      this.todoService.addTodo(todo.trim());
    }
  }
}