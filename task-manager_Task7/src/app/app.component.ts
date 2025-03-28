import { Component } from '@angular/core';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent],
  template: '<app-task></app-task>',
})
export class AppComponent {}
