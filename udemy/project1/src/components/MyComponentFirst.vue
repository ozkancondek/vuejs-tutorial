<template>
  <div class="container">
    <h1>Subject=>{{header}}</h1>
    <p>{{myText}}</p>
    <p>{{uppercaseText}}</p>
    <input v-model = "myText" type="text"  >
    <button @click="deleteText">Delete</button>
    <br>
    <p>{{changes}} changes occured</p>
    <p v-if="changes >= 10">You Made more than 10 changing</p>
  </div>
</template>

<script>
export default {
  name : "MyComponentFirst",
  props : {
    header : String

  },
  data (){
    return {
      myText : "Here is my text comes from inner data",
      changes:0
    }
  },
  computed : {
    uppercaseText(){
     return  this.myText.toUpperCase()
    }
  },
  methods : {
    deleteText (){
       this.myText = ""
    }
  },

  watch : {
    myText (){
      this.changes ++
    }
  }




}

</script>
<style scope>
.container{
  border: 2px solid aqua;
  padding: 10px;
  width: 100%;
}
input{
  width: 300px;
  height: 40px;
  font-size: 1rem;
}

</style>