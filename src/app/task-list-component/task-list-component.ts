import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from './task.service';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list-component',
  imports: [TaskItem],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
  standalone: true,
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  tasks = this.taskService.alltasks;
  selectedFilter = signal<string>('All');

  taskStatus = computed(() => {
    switch (this.selectedFilter()) {
      case 'To Do':
        return this.taskService
          .alltasks()
          .filter((task) => task.status === 'To Do');
      case 'In Progress':
        return this.taskService
          .alltasks()
          .filter((task) => task.status === 'In Progress');
      case 'Done':
        return this.taskService
          .alltasks()
          .filter((task) => task.status === 'Done');
      default:
        return this.taskService.alltasks();
    }
  });

  onChangeFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
