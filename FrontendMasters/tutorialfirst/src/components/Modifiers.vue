<template>
  <div class="modi">
    <h1>{{ header }}</h1>

    <p v-for="value in info" :key="value">=>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "VueModifiers",
  props: {
    header: {
      type: String,
      default: () => "Modifiers",
    },
  },

  data() {
    return {
      info: {
        c1: "@mousemove.stop is comparable to e.stopPropagation()",
        c2: " @mousemove.prevent this is like e.preventDefault()",
        c3: " @submit.prevent this will no longer reload the page on submission",
        c4: "@click.once not to be confused with v-once, this click event will be triggered once.",
        c5: "@click.native so that you can listen to native events in the DOM",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modi {
  border: 2px solid rgb(165, 81, 68);
  margin-top: 10px;
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
</style>
