<script lang="ts">
interface Props {
  status: TaskStatus;
}
</script>

<script setup lang="ts">
import type { Task, TaskStatus } from "@/types";
import { ref, reactive } from "vue";
import useTasks from '@/store/useTasks';

const props = defineProps<Props>();
const shouldDisplayForm = ref(false);

const { addNewTask } = useTasks();

const newTask = reactive<Omit<Task, "id">>({
  title: "",
  description: "",
  status: props.status,
});

const resetForm = () => {
  shouldDisplayForm.value = false;
  newTask.title = "";
  newTask.description = "";
};

const handleOnSubmit = () => {
  addNewTask({
    id: Math.random() * 100000000000000000,
    ...newTask,
  });
  
  resetForm();
}
</script>

<template>
  <form action="">
    <h3 class="add-button" v-if="!shouldDisplayForm" 
        @click="shouldDisplayForm = !shouldDisplayForm">
      Add New
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div>
          <input type="text" placeholder="Title" v-model="newTask.title" />
        </div>
        <div>
          <textarea type="text" placeholder="Description" v-model="newTask.description" />
        </div>

        <button type="submit">Submit</button>
        <button type="button" @click="resetForm">Cancel</button>
      </form>
    </template>
  </form>
</template>

<style scoped>
  .add-button {
    cursor: pointer;
  }
</style>