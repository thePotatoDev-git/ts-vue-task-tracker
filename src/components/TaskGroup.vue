<script lang="ts">
interface Props {
    status: TaskStatus,
}
</script>

<script setup lang="ts">
import { TaskStatus } from '@/types';
import Draggable from 'vuedraggable';
import CreateTask from './CreateTask.vue';
import useTasks from '@/store/useTasks';

const props = defineProps<Props>();

const { getTasksByStatus, deleteTask, updateTask } = useTasks();
const taskList = getTasksByStatus(props.status)

const groupLabel = {
    [TaskStatus.Pending]: "Pending",
    [TaskStatus.InProgress]: "In Progress",
    [TaskStatus.Completed]: "Completed",
};

const onDraggableChange = (payload: any) => {
    console.log('payload', payload);
    if(payload?.added?.element) {
        // update task status
        updateTask(payload?.added?.element, props.status);
    }
};
</script>

<template>
    <section class="group-wrapper">
        <h3>{{ groupLabel[props.status] }}</h3>

        <Draggable class="draggable" :list="taskList" group="tasks" itemKey="id" @change="onDraggableChange">
            <template #item="{ element: task }">
                <li>
                    {{ task.title }}
                    <span class="delete-icon" @click="deleteTask(task)">x</span>
                    <div>
                    <span class="task-description">{{ task.description }}</span>
                    </div>
                </li> 
            </template>
        </Draggable>

        <CreateTask :status="props.status" />
    </section>
</template>

<style scoped>
    .group-wrapper {
        flex: 1;
        padding: 20px;
        background-color: rgb(179, 196, 197);
        width: 300px;
    }
    .group-wrapper li {
        list-style-type: none;
        background-color: aliceblue;
        padding: 2px 5px;
        cursor: grab;
        margin-bottom: 10px;
    }
    .draggable {
        min-height: 200px;
    }
    .delete-icon {
        float: right;
        cursor: pointer;
    }
    .task-description {
        font-size: 12px;
    }
</style>