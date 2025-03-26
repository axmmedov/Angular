import { Component } from '@angular/core';
import { TaskManagerComponent } from './task-manager.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TaskManagerComponent],
  template: `<app-task-manager></app-task-manager>`
})
export class AppComponent {}
