<template>
  <div class="hello">
    <h1>{{ header }}</h1>
    <div class="counter">
      <input type="number" v-model.number="counter" />
      <p v-for="el in counterStateArray" :key="el">{{ el }}</p>
    </div>
    <div class="counter2">
      <input type="number" v-model.number="counter2" />
    </div>
    <div class="example">
      <button @click="getContent">Click me to see Content</button>
      <p>
        {{ contentStatus }}
        <span v-if="contentSubmitted"> Author:{{ Author }}</span>
      </p>
      <p v-if="contentSubmitted">{{ contentSubmitted }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchersVue",
  props: {
    header: {
      type: String,
      default: () => "Watchers",
    },
  },
  data() {
    return {
      contentStatus: "Where is my Content",
      contentSubmitted: null,
      Author: "Calvin Coolidge",
      counter: 0,
      counter2: 0,
      counterStateArray: ["Counter values"],
    };
  },
  watch: {
    contentStatus() {
      this.contentSubmitted = "Your content submitted";
      setTimeout(() => (this.contentSubmitted = null), 2000);
    },
    counter2(newValue, oldValue) {
      console.log(
        `The counter has changed! It was ${oldValue} and now ${newValue}`
      );
    },
    counter() {
      this.counterStateArray.push(this.counter);
      console.log(this.counterStateArray);
    },
  },
  methods: {
    getContent() {
      this.contentStatus =
        "Nothing in this world can take place of persistance!!!";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 2px solid blue;
}
.counter,
.counter2 {
  padding: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  font-size: 2rem;
  width: 50px;
  height: 40px;
}
button {
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  background: teal;
  border-radius: 4px;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
