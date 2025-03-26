import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  template: `
    <h1>Task Details</h1>
    <p>Task ID: {{ id }}</p>
  `,
  styles: []
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  id: string = this.route.snapshot.paramMap.get('id') || '';
}