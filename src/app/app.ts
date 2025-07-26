import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TaskListComponent } from './task-list-component/task-list-component';
import { TaskService } from './task-list-component/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private taskService = inject(TaskService);

  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  onAddTask(title: string, description: string) {
    this.taskService.onAddTemplate({
      title: title,
      description: description,
      priority: Math.random().toString(),
      dueDate: Date(),
    });
    this.formEl()?.nativeElement.reset();
  }
}
