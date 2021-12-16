/*
 * @Author: liyingda
 * @Date: 2021-12-16 10:04:36
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 16:13:24
 */
import Vue from "vue"
import App from './App.vue'
import VueMeta from "vue-meta";
import { createRouter } from './router/index.js'
import { createStore } from './store/index'

Vue.use(VueMeta);
Vue.mixin({
  metaInfo: {
    titleTemplate: 'hellp - %s'
  }
});

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router, //把路由挂载到Vue根实例中
    store, //把store挂载到Vue根实例中
    render: h => h(App) // 根实例简单的渲染应用程序组件。
  })
  return { app, router, store }
}
