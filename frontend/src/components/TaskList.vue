<template>
  <div id="task-list">
    <ul class="taskList">
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }} - {{ task.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";
import { getAll } from "../client/TodoService";
export default {
  name: "TaskList",
  data: function () {
    return {
      tasks: Array,
    };
  },
  methods: {
    getTasks: function () {
      getAll().then((data) => {
        this.tasks = data;
      });
    },
  },
  created() {
    this.getTasks();
    eventBus.$on("taskAdded", (newTask) => {
      this.tasks.push(newTask);
    });
  },
};
</script>

<style>
</style>