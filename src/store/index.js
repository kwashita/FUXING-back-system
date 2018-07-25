import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    {id: 1, title: '你吃'},
    {id: 1, title: '你好'},
    {id: 1, title: '../..//.//.'},
  ]

}
const mutations = {
  ADD_INPUT (state, payload) {
    this.state.list.push(payload)
  },
  ADD_TEXT (state, payload) {
    this.state.list = this.state.list.map(item => item.id === payload.id ? {
      ...item,
      title: payload.title
    } : item)
  },
  DELE_TEXT (state, payload) {
    console.log(this.state.list)
    this.state.list = this.state.list.filter(item => item.id !== payload)
  }
}
const actions = {
  ADD_INPUT ({ commit }, payload) {
    commit('ADD_INPUT', payload)
  },
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
