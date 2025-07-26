import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { TaskService } from '../task-list-component/task.service';
import { Task, TaskId, TaskStatus } from '../task-list-component/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  private taskService = inject(TaskService);
  taskData = input.required<Task>();

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'To Do';

    switch (status) {
      case 'To Do':
        newStatus = 'To Do';
        break;
      case 'In Progress':
        newStatus = 'In Progress';
        break;
      case 'Done':
        newStatus = 'Done';
        break;
      default:
        break;
    }
    this.taskService.updateTaskStatus(taskId, newStatus);
  }
}
