<template>
  <div>
    <!--  <button>{{ btnText }}</button> -->

    <button @click="$emit('getText')">{{ fullText }}</button>
  </div>
</template>
<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
      default: () => "Click Me",
      /* default: "Click Me", */
    },
  },
  computed: {
    fullText() {
      return this.btnText + "ozkan";
    },
  },
};
</script>

<style>
button {
  background-color: aquamarine;
  font-size: 60px;
  border-radius: 20px;
  padding: 10px;
  color: black;
  cursor: pointer;
}
</style>
