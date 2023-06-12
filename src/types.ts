export enum TaskStatus {
    Pending = 'pending',
    InProgress = 'inProgress',
    Completed = 'completed',
};

export interface Task {
    id: number,
    title: string,
    description: string,
    status: TaskStatus,
};