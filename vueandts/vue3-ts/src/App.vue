<template>
  <div class="text-center">
    <h1>Main Page</h1>
    <my-first-component>
      <p>use slot to display between-tag-content</p>
    </my-first-component>
    <div class="lesson">
      <h2>Message:{{ msg }}</h2>
    </div>
    <div class="lesson">
      <a :style="linkStyle" :target="newTabAttribute" v-bind:href="goGoogle"
        >Go to Google</a
      >
    </div>
    <div class="lesson">
      <h2>Events</h2>
      <h3>{{ msg2 }}</h3>
      <button
        v-on:click="msg2 = 'You changed the Contend'"
        class="btn btn-primary"
      >
        Change Message
      </button>
      <button @click="changeMessage" class="btn btn-secondary my-4">
        Change with Function
      </button>
      <button @mousemove="hover = 'Hovered'" class="btn btn-primary my-4">
        {{ hover }}
      </button>
    </div>
    <div class="lesson">
      <h2>Call function from template</h2>

      <button @click="getRandomNumber" class="btn btn-primary my-4">
        Click to Get Number on console
      </button>
    </div>
    <div class="lesson" @click.self="getRandomNumber">
      <h2>Event Modifier</h2>
      <button class="btn btn-primary my-4">Only Parent active</button>
    </div>
    <div class="lesson">
      <h2>two Way Binding</h2>
      <!-- <input @input="makeEqual" type="text" />
      <p>input value = {{ inputText }}</p> -->
      <p>Works like v-model</p>
      <input v-model="inputText" type="text" />
      <p>input value = {{ inputText }}</p>
    </div>
    <div class="lesson">
      <h2>Conditional Rendering</h2>
      <p v-if="condition">Condition is true</p>
      <p v-else>Condition is false</p>
      <button @click="condition = !condition" class="btn btn-primary">
        {{ condition }}
      </button>
    </div>
    <div class="lesson">
      <h2>Loops</h2>

      <ul :key="str" v-for="str in me">
        <li>{{ str }}</li>
      </ul>
    </div>
    <div class="lesson">
      <h2>Computed</h2>
      <p>counter: {{ counter }}</p>
      <p>counter with computed: {{ increaseCounter }}</p>
      <button @click="counter += 1" class="btn btn-primary">Increase</button>
      <button @click="decrease()" class="btn btn-primary">Decrease</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import MyFirstComponent from "@/components/MyFirstComponent.vue";
//track the value with ref.Also can be used for counter app
const msg = ref("Welcome to page");
setTimeout(() => {
  msg.value = "You will learn Vue3 with TypeScript";
}, 3000);

//v-bind

const goGoogle = ref("https://www.google.com");
const newTabAttribute = "_blank";
//give style manually
const linkStyle = ref({
  "font-size": "25px",
  color: "red",
});
const hover = ref("Hover me");
const msg2 = ref("Welcome to Vue3");
const inputText = ref("");
const condition = ref(true);
const me = ref(["my", "name", "is", "ozkan"]);
const counter = ref(0);
const increaseCounter = computed(() => {
  return counter.value * 2;
});
const decrease = () => {
  counter.value -= 1;
};

function changeMessage(e: Event): void {
  msg2.value = "You changed content with function";
  console.log(e);
}
const getRandomNumber = (): void => {
  console.log(Math.floor(Math.random() * 10));
};
// const makeEqual = (e: Event) => {
//   if (e.currentTarget instanceof HTMLInputElement) {
//     inputText.value = e.currentTarget.value;
//   }
// };
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
.lesson {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 2px solid aqua;
  margin-top: 10px;
}
</style>
