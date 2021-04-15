<template>
  <div id="app">
    <router-link to="/test1/12">Go to test1</router-link>
    <br>
    <router-link to="/test2?q=1">Go to test2</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/test2.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
