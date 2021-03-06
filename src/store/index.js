/*
 * @Author: liyingda
 * @Date: 2021-12-16 14:10:52
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 16:32:32
 */
import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
    state: () => {
      posts: []
    },
    mutations: {
      setPosts(state, data) {
        state.posts = data
      }
    },
    actions: {
      //在服务器渲染期间必须让 action 返回一个 Promise
      async getPosts({ commit }) {
        const { data } = await axios.get('https://cnodejs.org/api/v1/topics')
        commit('setPosts', data.data);
      }
    }
  })
}