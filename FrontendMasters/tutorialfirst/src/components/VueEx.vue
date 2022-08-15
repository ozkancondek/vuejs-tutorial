<template>
  <div class="main">
    <h1>{{header}}</h1>
    <p>Centralized store for shared data and logic, even shared methods or async</p>
    <p>Unidirectional data flow</p>
    <p>Influenced by Flux application architecture</p>
    <p>Similar to Redux </p>
    <p>You can still use Redux if you like but this is Vue's version</p>
    <p>The structure for normal vue project and nuxt little bit  different from eachother</p>
    <p>=>State is what you might expect: the state of the application. Similar to how we use data in the components.</p>
    <p>=>Getters will make values able to show statically in our templates. In other words, getters can read the value, but not mutate the state.</p>
  <p>=>Mutations will allow us to update the state, but they will always be synchronous. Mutations are the only way to change data in the state in the store.</p>
    <p>=>Actions will allow us to update the state, asynchronously, but will use an existing mutation. This can be very helpful if you need to perform a few different mutations at once in a particular order, or reach out to a server.</p>

  </div>
</template>
<script>
export default {
  data (){
    return{header : "Vuex"}

}
}
</script>
<style>
.main{
  padding:10px
}
</style>