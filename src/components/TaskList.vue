<script setup lang="ts">
import { TaskStatus } from '@/types';
import TaskGroup from './TaskGroup.vue';
</script>

<template>
    <section class="groups-wrapper">
        <TaskGroup :status="TaskStatus.Pending" />
        <TaskGroup :status="TaskStatus.InProgress" />
        <TaskGroup :status="TaskStatus.Completed" />
    </section>
</template>

<style scoped>

.groups-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}
</style>