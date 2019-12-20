export default {
  increment (state) {
    state.count++
  },
  getTask (state, task) {
    state.newTask = task
  },
  addTask (state) {
    state.tasks.push({
      body: state.newTask,
      completed: false
    })
  },
  clearTask (state) {
    state.newTask = ''
  },
  removeTask (state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)
  },
  completeTask (state, task) {
    task.completed = !task.completed
  }
}
