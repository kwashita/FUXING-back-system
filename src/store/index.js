import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    // {id: 1, title: '你吃'}
  ]

}
const mutations = {
  ADD_TEXT (state, payload) {
    this.state.list.push(payload)
  },
  DELE_TEXT (state, payload) {
    console.log(this.state.list)
    this.state.list = this.state.list.filter(item => item.id !== payload)
  }
}
const actions = {
  ADD_TEXT ({ commit }, payload) {
    commit('ADD_TEXT', payload)
  },
  DELE_TEXT ({commit}, payload) {
    commit('DELE_TEXT', payload)
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
