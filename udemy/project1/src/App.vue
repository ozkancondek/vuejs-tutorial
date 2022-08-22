<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MyComponentFirst header = "My First Component"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponentFirst from "@/components/MyComponentFirst";

export default {
  name: 'App',
  components: {
    MyComponentFirst,
    HelloWorld
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
