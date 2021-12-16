/*
 * @Author: liyingda
 * @Date: 2021-12-16 10:04:46
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 14:15:11
 */
import { createApp } from './app'

// 客户端特定引导逻辑……

const { app, router, store } = createApp()
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount('#app')
});