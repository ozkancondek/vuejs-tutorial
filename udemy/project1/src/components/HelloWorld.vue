<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>{{myNum}}</p>

    <p>{{myArr}}</p>
  </div>
</template>

<script>
import {myArr} from "@/data"; //imported array£

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
   return {
     myNum : myArr[0],  //value of myArr[0] equal to myNum
     //another option is I can directly return myArr
     myArr
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
