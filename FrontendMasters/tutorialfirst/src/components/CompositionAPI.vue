<template>
  <div class = "main">
    <h1>{{header}}</h1>
    <a href="https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api">Find more here</a>
    <h3>Do you like tacos?</h3>
    <input type="radio" id="yes" value="yes" v-model="tacos">
    <label for="no"> yes</label>
    <br>
    <input type="radio" id="no" value="no" v-model="tacos">
    <label for="no"> no</label>

    <br>
    <p v-if="tacos === 'yes'" class="thumbs">👍</p>
    <p v-else-if="tacos === 'no'">you're a monster</p>

  </div>
</template>
<!--another way to use cApi-->
<!--<script setup>-->
<!--const state = reactive({-->
<!--  count: 0-->
<!--})-->

<!--onMounted(() => {-->
<!--  console.log(state.count)-->
<!--})-->

<!--return {-->
<!--  state-->
<!--}-->
<!--</script>-->
<script>
import {ref} from "vue";

export default {

  data () {
    return{
      header:"Composition API",
      // tacos:""

    }

  },
  setup (){
    const tacos = ref("")
    // to define more value use this method
    // const state = reactive({
    //   count:0,
    // })
    return{
      tacos
    }
  }
  // const { ref } = Vue;
  //
  // const App = {
  //   setup() {
  //     const restaurantName = ref(`Let's taco bout it`),
  //         options = ref(["Lengua", "Carnitas", "Al Pastor", "Pollo"]),
  //         numItems = ref(0),
  //         deliveryTime = ref(25),
  //         freeDelivery = true;
  //
  //     function addItems() {
  //       numItems.value++;
  //     }
  //
  //     return {
  //       restaurantName,
  //       options,
  //       numItems,
  //       deliveryTime,
  //       freeDelivery,
  //       addItems
  //     };
  //   }
  // };
  // const { reactive, toRefs } = Vue;
  //
  // const App = {
  //   setup() {
  //     const state = reactive({
  //       restaurantName: `Let's taco bout it`,
  //       options: ["Lengua", "Carnitas", "Al Pastor", "Pollo"],
  //       numItems: 0,
  //       deliveryTime: 25,
  //       freeDelivery: true
  //     });
  //
  //     function addItems() {
  //       state.numItems++;
  //     }
  //
  //     return {
  //       ...toRefs(state),
  //       addItems
  //     };
  //   }
  // };
  //check the related presentation
  //https://slides.com/sdrasner/intro-to-vue-3-6?token=yidUZcRL#/22
}
</script>
<style>
.main{
  padding:10px;
}
.thumbs {
  font-size: 40px;
  margin-top: 20px;
}
label {
  padding-right: 10px;
}
</style>