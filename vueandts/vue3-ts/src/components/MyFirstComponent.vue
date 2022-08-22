<template>
  <div class="main">
    <slot></slot>
    <h1>{{ msg }}</h1>
    <h3>Emit>Defining new event and passing</h3>
    <div class="plate" v-if="toggle">
      <p>Toggle Plate</p>
    </div>
    <!--    <button class="btn btn-primary my-4" @click="toggle = !toggle">
      toggle
    </button> -->
    <ToggleButton @toggle="toggle = !toggle"></ToggleButton>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ToggleButton from "./ToggleButton.vue";
const msg = ref("Here is my first component");
const toggle = ref(false);
</script>
<style scoped>
.main {
  color: blue;
  border: 2px solid red;
  padding: 10px;
}
.plate {
  margin: auto;
  width: 60%;
  height: 100px;
  padding: 10px;
  text-align: center;
  background: aqua;
  border: 2px solid black;
}
</style>
