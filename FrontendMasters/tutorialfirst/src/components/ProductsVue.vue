<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="products">
    <h1>{{ header }}</h1>
    <!--  <MyButton btn-text="Hi from parent" /> -->
    <!-- <MyButton :btn-text="`hi hih`" /> -->
    <MyButton :btn-text="buttonText" />
  </div>
</template>

<script>
import MyButton from "./ui/MyButton.vue";
export default {
  name: "ProductsVue",
  components: {
    MyButton,
  },
  props: {
    header: {
      type: String,
      default: () => "Products Component",
    },
  },
  data() {
    return {
      buttonText: "Hello from parent",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 3px solid rgb(243, 78, 169);
  margin-top: 10px;
  padding: 10px;
}

a {
  color: #42b983;
}
</style>
