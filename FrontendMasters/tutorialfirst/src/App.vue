<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <!-- <HelloWorld :msg="message" /> -->
    <h3>
      <button @click="increment">+</button>
      Adjust the counter
      <button @click="decrement">-</button>
      <p>Here is app data {{ count }}</p>
    </h3>
    <MyFirstComponent :count="count" />
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
    <ComputedExample />
    <WatchersVue />
    <ProductsVue />
    <DestinationsRender/>
    <AnimationTransition/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/MyFirstComponent.vue";
import DirectivesModifiersDataRendering from "./components/DirectivesModifiersDataRendering.vue";
import DirectivesExample from "./components/DirectivesExample.vue";
import VueModifiers from "./components/Modifiers.vue";
import MethodsPropertiesWatchers from "./components/MethodsPropertiesWatchers.vue";
import ComputedExample from "./components/ComputedExample.vue";
import WatchersVue from "./components/WatchersVue.vue";
import ProductsVue from "./components/ProductsVue.vue";
import DestinationsRender from "./components/DestinatiosRender.vue"
import AnimationTransition from "./components/AnimationTransition.vue"
//import { computed } from "@vue/runtime-core";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyFirstComponent,
    DirectivesModifiersDataRendering,
    DirectivesExample,
    VueModifiers,
    MethodsPropertiesWatchers,
    ComputedExample,
    WatchersVue,
    ProductsVue,
    DestinationsRender,
    AnimationTransition
  },
  // setup() {
  //   const message = "Velcome to your Vue.js App";
  //   const cCounter = computed(() => {
  //     return new Date();
  //   });
  //    const myClickHandler = () => {
  //     console.log("asd");
  //   };

  //   return { message, cCounter, myClickHandler };
  // },
  data() {
    return {
      message: "Velcome to your Vue.js App",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
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
