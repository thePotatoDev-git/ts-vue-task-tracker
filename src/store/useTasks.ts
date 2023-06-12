import { TaskStatus, type Task } from "@/types";
import { reactive, computed } from 'vue';

interface TaskStore {
    [TaskStatus.Pending]: Task[];
    [TaskStatus.InProgress]: Task[];
    [TaskStatus.Completed]: Task[];
}

const defaultValue = {
    [TaskStatus.Pending]: [
        {
            id: 1,
            title: 'Learn Vue',
            description: 'Complete TypeScript with Vue app',
            status: TaskStatus.Pending,
        },
    ],
    [TaskStatus.InProgress]: [],
    [TaskStatus.Completed]: [],
}

const taskStore = reactive<TaskStore>(defaultValue);

export default () => {
    const getTasksByStatus = (taskStatus: TaskStatus) => {
        return computed(() => taskStore[taskStatus]);
    };

    const updateTask = (task: Task, newStatus: TaskStatus) => {
        task.status = newStatus;
    };

    const addNewTask = (task: Task) => {
        taskStore[task.status].push(task);
    }

    const deleteTask = (taskToDelete: Task) => {
        taskStore[taskToDelete.status] = taskStore[taskToDelete.status].filter(task => task.id !== taskToDelete.id);
    }

    return { getTasksByStatus, addNewTask, deleteTask, updateTask };
};

