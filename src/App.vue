<script setup lang="ts">
  import TaskList from './components/TaskList.vue';
</script>

<template>
  <div class="app-wrapper">
    <div>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </div>

    <div class="wrapper">
      <TaskList />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
