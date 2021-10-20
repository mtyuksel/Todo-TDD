import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    addTask(task) {
      this.$emit("taskAdded", task)
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')