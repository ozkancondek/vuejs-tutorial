<template>
  <div class="hello">
    <h1>{{getGreeting}}</h1>
    <br>
    <button @click ="updateGreeting">Update</button>


  </div>
</template>

<script>
//For primitive data types
import {ref} from "vue"
export default {
  name: 'HelloWorld',
  //Wird ausgeführt bevor di Comüonent erzeugt wird
  //und nachdem die props verfügbar sind.
  setup(){
    //Logic,logic, logic
 const getGreeting = ref("Hello World")
    const updateGreeting = ()=>{
   return getGreeting.value= "Tex updated"
    }
    return {
      getGreeting,
      updateGreeting
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
