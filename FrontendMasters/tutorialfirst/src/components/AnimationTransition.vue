<template>
  <div class="main">
    <h2>{{header}}</h2>
    <div v-bind:class="[isShowing ? blurClass : '', bkClass]">
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis cumque fugit id in iusto necessitatibus quas quia reprehenderit totam.</h3>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
  </div>
  <transition name="fade">
    <div v-if="isShowing" class="modal">
      <button @click="toggleShow">
        Close
      </button>
    </div>
  </transition>
  </div>
</template>
<script>
export default {
  name:"AnimationTransition",
  data (){
    return {
      header:"Animation and Transition",
      isShowing: false,
      bkClass: 'bk',
      blurClass: 'blur'
    }

  },
  methods:{
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
}
</script>
<style >
.main{
  margin-top: 10px;
  border: 2px solid aqua;
  font-family: 'Roboto Mono', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  font-family: 'Roboto Mono';
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}
h4 {
  margin: 0 0 15px;
}
span{
  font-size: 1rem;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
/*key codes are here for transition*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}


</style>