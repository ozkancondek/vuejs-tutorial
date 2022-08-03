<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyFirstComponent
      header="Ozkan Condek"
      paragraph="Here is small explanation about me"
      myNum=7
    />
    <DirectivesModifiersDataRendering
      changeColor=""
      colored="changeBG"
      showButton=""
      like=""
      writeMessage="Message appears in below"
      counter=0
       myColor = "I like <a href='http://www.epicurious.com/recipes/food/views/tacos-al-pastor-242132'target='_blank'>Al Pastor</a> color"
      write = "Change here"
   
    />
    <DirectivesExample
    header = "Directives Example"
    num1 =0
    num2=0
    name = ""
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/MyFirstComponent.vue";
import DirectivesModifiersDataRendering from "./components/DirectivesModifiersDataRendering.vue";
import     DirectivesExample from "./components/DirectivesExample.vue";

 
export default {
  name: "App",
  components: {
    HelloWorld,
    MyFirstComponent,
    DirectivesModifiersDataRendering,
    DirectivesExample
  }

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
