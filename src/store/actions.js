export default {
  increment (content) {
    content.commit('increment')
  },
  getTask ({commit}, task) {
    commit('getTask', task)
  },
  addTask (content) {
    content.commit('addTask')
  },
  clearTask ({commit}) {
    commit('clearTask')
  },
  removeTask ({commit}, task) {
    commit('removeTask', task)
  },
  completeTask ({commit}, task) {
    commit('completeTask', task)
  }
}
