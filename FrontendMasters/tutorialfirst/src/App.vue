<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <!-- <HelloWorld :msg="message" /> -->
    <MyFirstComponent
      header="My component header"
      paragraph="Here is small explanation about me"
      myNum="7"
    />
    <DirectivesModifiersDataRendering
      changeColor=""
      colored="changeBG"
      showButton=""
      like=""
      writeMessage="Message appears in below"
      counter="0"
      myColor="I like <a href='http://www.epicurious.com/recipes/food/views/tacos-al-pastor-242132'target='_blank'>Al Pastor</a> color"
      write="Change here"
    />
    <DirectivesExample header="Directives Example" num1="0" num2="0" name="" />
    <VueModifiers />
    <MethodsPropertiesWatchers />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/MyFirstComponent.vue";
import DirectivesModifiersDataRendering from "./components/DirectivesModifiersDataRendering.vue";
import DirectivesExample from "./components/DirectivesExample.vue";
import VueModifiers from "./components/Modifiers.vue";
import MethodsPropertiesWatchers from "./components/MethodsPropertiesWatchers.vue";

import { computed } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyFirstComponent,
    DirectivesModifiersDataRendering,
    DirectivesExample,
    VueModifiers,
    MethodsPropertiesWatchers,
  },
  setup() {
    const message = "Velcome to your Vue.js App";
    const cCounter = computed(() => {
      return new Date();
    });
    const myClickHandler = () => {
      console.log("asd");
    };

    return { message, cCounter, myClickHandler };
  },
  // data(){
  //   return{
  //     message:"Velcome to your Vue.js App"
  //   }
  // },
  computed: {
    cCounterTwo: () => ({
      message: "Velcome to your Vue.js App",
    }),
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
