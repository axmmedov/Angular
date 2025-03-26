import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule ni import qilamiz
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule], // CommonModule ni imports ga qo'shamiz
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todos; let i = index">
        {{ todo }} <button (click)="removeTodo(i)">Remove</button>
      </li>
    </ul>
  `,
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  todos = this.todoService.getTodos();

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }
}