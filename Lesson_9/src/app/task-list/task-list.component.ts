import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  template: `
    <button (click)="toggle()">Show/Hide</button>
    @if (visible) {
      <ul>
        @for (task of tasks; track task) {
          <li appHighlight [ngStyle]="{'color': taskColor}">{{ task }}</li>
        }
      </ul>
    }
  `
})
export class TaskListComponent {
  tasks = ['Learn Directives', 'Build App'];
  visible = false;
  taskColor = 'blue';

  toggle() {
    this.visible = !this.visible;
  }
}
