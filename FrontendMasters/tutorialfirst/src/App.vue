<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyFirstComponent
      header="Ozkan Condek"
      paragraph="Here is small explanation about me"
      myNum="7"
    />
    <DirectivesModifiersDataRendering
      changeColor=""
      colored="changeBG"
      showButton=""
      like=""
      writeMessage="Message appears in below"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/MyFirstComponent.vue";
import DirectivesModifiersDataRendering from "./components/DirectivesModifiersDataRendering.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyFirstComponent,
    DirectivesModifiersDataRendering,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 2px solid red;
  padding: 20px;
}
</style>
