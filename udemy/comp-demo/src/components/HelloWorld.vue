<template>
  <div class="hello">
    <h1>{{ getGreeting }}</h1>
    <br>
    <button @click="updateGreeting">Update primtive</button>
    <br>
    <hr>
    <h1>{{ greetingObj.message }}-{{ greetingObj.desc }}</h1>
    <br>
    <button @click="updateGreetingObj">Update unprimitive</button>


  </div>
</template>

<script>
//For primitive data types ref()
//for others reactive()
import {ref, reactive} from "vue"

export default {
  name: 'HelloWorld',
  //Wird ausgeführt bevor di Comüonent erzeugt wird
  //und nachdem die props verfügbar sind.
  setup() {
    //Logic,logic, logic
    const getGreeting = ref("Hello World")
    const updateGreeting = () => {
      return getGreeting.value = "Tex updated"
    }
    const greetingObj =reactive( {
      message: "Salut",
      desc: "Wilkommen zur App"
    })
    const updateGreetingObj = () => {

      greetingObj.message = "Hallo"
      greetingObj.desc = "Description updated"

    }

    return {
      getGreeting,
      updateGreeting,
      greetingObj,
      updateGreetingObj
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
