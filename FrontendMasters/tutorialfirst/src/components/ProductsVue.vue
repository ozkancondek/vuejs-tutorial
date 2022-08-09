<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="products">
    <h1>{{ header }}</h1>
    <!--  <MyButton btn-text="Hi from parent" /> -->
    <!-- <MyButton :btn-text="`hi hih`" /> -->
    <h2>Emit:{{ text }}</h2>
    <MyButton :btn-text="buttonText" @getText="updateText" />
    <br />
    <div class="product-container">
      <div class="unit" v-for="unit in manifest" :key="unit.item">
        <ProductCard :url="unit.url" :item-name="unit.item" />
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./ui/MyButton.vue";
import ProductCard from "./ui/ProductCard.vue";
export default {
  name: "ProductsVue",
  components: {
    MyButton,
    ProductCard,
  },
  props: {
    header: {
      type: String,
      default: () => "Products Component",
    },
  },
  data() {
    return {
      text: "Click to button update text",
      buttonText: "Hello from parent",

      manifest: [
        {
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg",
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg",
        },
        {
          item: "sweatshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg",
        },
      ],
    };
  },
  methods: {
    updateText() {
      this.text = "text updated";
    },
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
.product-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
}
.unit {
  border: none;
}
</style>
