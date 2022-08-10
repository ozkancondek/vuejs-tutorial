<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="first-component">
    <h1>{{ header }}</h1>
    <div class="section">

    </div>
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
    <div class="section">
      <h3>Emit</h3>
      <p>reporting from child to parent</p>
      <p>Define an emit in child component first</p>
      <p>@click="$emit('getText')"></p>
      <p>Give it to child as props in parent component</p>
      <p>@getText="updateText"</p>
    </div>
    <div class="section">
      <h3>Slots</h3>
      <p>Pass some content into a component with ease!</p>
      <p>Pass template content to a child compoennt</p>
    </div>
    <!-- <HelperSlot :component-Text="helperSlotText" /> -->
    <HelperSlot :component-Text="helperSlotText">
      <!--  <p slot="upper">I named this p tags to determine their places******</p> -->
      <p>I named this p tags to determine their places******</p>
      <p>
        I wrote this contetn in parent component between child component
        tags******
      </p>
    </HelperSlot>
  </div>
</template>

<script>
import HelperSlot from "./ui/HelperSlot.vue";
export default {
  components: {
    HelperSlot,
  },
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
    return {
      helperSlotText: "I am the HelperSlot header",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first-component {
  border: 2px solid red;
  padding: 10px;
}
.section {
  border: 3px solid rgb(141, 243, 78);
  margin-top: 10px;
  padding: 10px;
}

a {
  color: #42b983;
}
</style>
