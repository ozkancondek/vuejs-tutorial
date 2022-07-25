<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="first-component">
    <h1>{{ header }}</h1>
    <p>{{ paragraph }}</p>
    <p>And here is my favorite number: {{ myNum }}</p>
    <p>Follow me from <a href="https://github.com/ozkancondek/">here</a></p>
    <h1>Type here:</h1>
    <textarea v-model="message" class="message" rows="5" maxlength="72" />
    <br />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "MyFirstComponent",
  props: {
    header: String,
    paragraph: String,
    myNUm: Number,
    message: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 3px solid rgb(243, 78, 169);
  margin-top: 10px;
}

a {
  color: #42b983;
}
textarea {
  padding: 10px;
}
</style>
