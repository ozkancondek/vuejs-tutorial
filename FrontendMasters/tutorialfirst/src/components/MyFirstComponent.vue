<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="first-component">
    <h1>{{ header }}</h1>
    <div class="section">
      <p>
        Vue.js uses HTML-based template syntax to bind the Vue instance to the
        DOM, very useful for components.
      </p>
      <p>
        Templates are optional, you can also write render functions with
        optional JSX support.
      </p>
      <p>
        Components:A collection of elements that are encapsulated into a group
        that can be accessed through one single element.
      </p>

      <h3>Props</h3>
      <p>Passing data down from the parent to the child</p>
      <p>Here is Counter:{{ count }}</p>
      <p>it comes from parent component</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFirstComponent",
  props: {
    header: {
      type: String,
      default: () => "My first Component",
    },
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div,
.section {
  border: 3px solid rgb(243, 78, 169);
  margin-top: 10px;
  padding: 10px;
}

a {
  color: #42b983;
}
</style>
