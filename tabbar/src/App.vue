<template>
  <div id="app">
    <MainTabbar />
    <router-view />
  </div>
</template>

<script>
import MainTabbar from './components/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  },
  created () {
    this.$router.push('/home')
  }
}
</script>   

<style>
/* 设置全局样式 */
@import './assets/style/common.css';
</style>
