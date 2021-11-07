<template>
  <div id="task-add">
    <button @click="addTask" class="btnAdd">Add Task</button>
    <input
      v-model="taskName"
      class="inpAdd"
      type="text"
      placeholder="Enter a Task..."
    />
  </div>
</template>

<script>
import { eventBus } from "../main";
import { add } from "../client/TodoService";

export default {
  name: "TaskAdd",
  data: function () {
    return {
      taskName: "",
    };
  },
  methods: {
    addTask: function () {
      if (this.isTaskContainsStar(this.taskName)) {
        alert("Tasks cannot contains stars!");
        return;
      }     
      add(this.taskName)
        .then((res) => {
          console.log(res)
          if(res.data.success)
            eventBus.addTask(res.data.data.todo);
        })
        .catch((err) => {
          console.log("An error occured!", err);
        });
    },
    isTaskContainsStar: function (taskName) {
      return taskName.includes("*");
    },
  },
  created() {},
};
</script>

<style>
</style>