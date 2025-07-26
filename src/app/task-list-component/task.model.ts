export type TaskStatus = 'To Do' | 'In Progress' | 'Done'; 
export type TaskDate = Date | string | number;
export type TaskPriority = string
export type TaskId = string
export interface Task {
  id: TaskId;
  title: string;
  description: string;
  status:TaskStatus;
  priority:TaskPriority ;
  dueDate:TaskDate;
}
