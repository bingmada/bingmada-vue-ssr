<!--
 * @Author: liyingda
 * @Date: 2021-12-16 10:04:30
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 14:05:28
-->
<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
    <!--路由出口-->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "创建一个vue实例",
    };
  },
  methods: {
    onClick() {
      console.log("---点击按钮---");
    },
  },
};
</script>