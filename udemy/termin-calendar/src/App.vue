<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <CalendarWeek/>

        <!-- Ende: Template für die Calendar-Week-Component -->
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <!-- Anfang: Template für die Calendar-Entry-Component -->

        <CalendarEntry/>

        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button :class="buttonSettingsClasses" class="btn btn-lg mb-2" @click="toggleDisplaySettings">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
<!--        <transition name="fade" >
          <CalendarSettings v-if="displaySettings"/>
        </transition>-->
        <transition enter-active-class="animate__animated animate__bounceInRight"
                    leave-active-class="animate__animated animate__bounceOutRight" >
          <CalendarSettings v-if="displaySettings"/>
        </transition>

        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek"
import CalendarEntry from "@/components/CalendarEntry";
import CalendarSettings from "@/components/CalendarSettings";

export default {

  name: "App",
  components: {
    CalendarSettings,
    CalendarEntry,
    //Long writing version
    //'CalendarWeek':CalendarWeek
    CalendarWeek,

  },
  data() {
    return {
      displaySettings: false
    }
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings
    }
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? "btn-success" : "btn-outline-success"

    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.square {
  width: 40px;
  height: 40px;
}

/*Transition : fade*/

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out
}


</style>
