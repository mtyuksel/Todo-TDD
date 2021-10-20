<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TaskAdd></TaskAdd>
    <TaskList></TaskList>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import TaskAdd from './components/TaskAdd.vue'

export default {
  name: 'App',
  components: {
    TaskAdd,
    TaskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
