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
    <br>
    <p>Update with toRef() method</p>
    <h1>{{message}} - {{desc}}</h1>
    <br>
    <hr>
    <h1>{{greetingReverse}}</h1>


  </div>
</template>

<script>
//For primitive data types ref()
//for others reactive()
//rerender values after click => toref()
import {ref, reactive,toRefs,computed,onMounted} from "vue"

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
    const greetingReverse = computed(()=>{
      return getGreeting.value.split("").reverse().join("")
    })
    //if I don't use that method those wil not be updated

    const greetingObj =reactive( {
      message: "Salut",
      desc: "Wilkommen zur App"
    })
    const greetingObjRefs = toRefs(greetingObj);
    const {message,desc} = greetingObjRefs;

    const updateGreetingObj = () => {

      greetingObj.message = "Hallo"
      greetingObj.desc = "Description updated"

    };
    onMounted(()=>console.log("Component mounted"))

    return {
      getGreeting,
      updateGreeting,
      greetingReverse,
      greetingObj,
      updateGreetingObj,
      message,
      desc,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
