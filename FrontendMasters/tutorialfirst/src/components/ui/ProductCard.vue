<template>
  <div class="item">
    <h2>{{ itemName.toUpperCase() }}</h2>
    <img :src="url" width="235" height="300"/>
    <div class="quantity">
      <button class="inc" @click="decrement">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="increment">+</button>
    </div>
    <button class="submit">Submit</button>
  </div>
</template>
<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    decrement() {
      this.counter > 0 ? (this.counter -= 1) : 0;
    },
    increment() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 600px;
  justify-content: space-around;
  background: #eee;
  padding: 10px;
  margin: 30px;
  border: none;
}

.item > img {
  align-self: center;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.inc {
  background: white;
  color: black;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.submit {
  background: black;
  color: white;

  margin-left: 20px;
  padding: 12px 14px;
  width: 240px;
  transition: 0.25s all ease-in;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
}
</style>
