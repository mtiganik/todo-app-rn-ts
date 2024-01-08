export interface Category{
  id: string,
  categoryName: string,
  categorySort: number,
  syncDt: string,
  tag: string
}

export interface Priority{
  id: string,
  priorityName: string,
  prioritySort: number,
  syncDt: string,
  tag: string
}

export interface Task{
  id: string,
  taskName: string,
  createdDt: string,
  dueDt: string,
  isCompleted: boolean,
  isArchieved: boolean | null,
  todoCategoryId: string,
  todoPriorityId: string,
  syncDt: string,
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  refreshToken: string;
}