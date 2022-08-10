<template>
  <div class="card">

    <img  width="235" height="300" :src="img" alt="image">
    <h2>{{name}}</h2>
    <p>{{desc}}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    }
  },


}
</script>
<style >
.card{
  display: flex;
  justify-content: center;
  align-items:center ;
  flex-direction: column;
  padding: 10px;

}
</style>
