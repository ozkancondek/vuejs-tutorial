<template>
  <div class="example">
    <h1>{{header}}</h1>
    <div class="row">
      <input v-model.number ="num1" type="number">
      <span>+</span>
      <input v-model.number ="num2" type="number">
      <span>=</span>
      <span>{{num1 + num2}}</span>

    </div>
    <div class="row second">
      <select v-model="name">
        <option>Carne Asada</option>
      <option>Pollo</option>
      <option>Bean</option>
      <option>Al Pastor</option>
      </select>
       
      <p :class="[name ? 'dontShow' : '']">This line will not be appeared when u choose a name</p>
      <br>
      <p v-if="name">You choosed:{{name}} and your sum is {{num1+num2}}</p>
    </div>
   
  </div> 
</template>

<script>
export default {
  name: "DirectivesExample",
  props: {
    header: String,
  
  },
  data(){
    return{
      num1:0,
      num2:0,
       
      name:""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example{
  border: 2px solid blue;
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
.calculator{
    border: #42b983;
    text-align: center;
}
.row {
  margin: 50px;
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}

input, span {
  padding: 10px;
  font-size: 30px;
  font-family: 'Work Sans', sans-serif;
}

input {
  width: 50px;
}

span {
  width: 20px;
}
.dontShow{
  display: none;
}

 
</style>
