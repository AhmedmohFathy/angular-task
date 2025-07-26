import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Setup Angular Project',
      description:
        'Initialize Angular workspace and install necessary dependencies',
      status: 'To Do',
      dueDate: '2025-07-10T18:00:00Z',
      priority: 'P1',
    },
    {
      id: '2',
      title: 'Create Task Component',
      description: 'Build reusable component to display task details',
      status: 'In Progress',
      dueDate: '2025-07-12T10:30:00Z',
      priority: 'P2',
    },
    {
      id: '3',
      title: 'Implement Routing',
      description: 'Setup routes for task list, task form, and task details',
      status: 'Done',
      dueDate: '2025-07-08T08:00:00Z',
      priority: 'P3',
    },
    {
      id: '4',
      title: 'Write Acceptance Criteria',
      description:
        'Document feature scope and validations for the Angular phase',
      status: 'To Do',
      dueDate: '2025-07-11T14:00:00Z',
      priority: 'P4',
    },
  ]);

  alltasks = this.tasks.asReadonly();

  onAddTemplate(taskData: {
    title: string;
    description: string;
    priority: string;
    dueDate: string;
  }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'To Do',
    };
    console.log(newTask);
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  onRemoveTask(id: string) {
    this.tasks.update((oldTasks) =>
      oldTasks.filter((task) => task.id.toString() !== id)
    );
  }

  private saveTasks() {
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
