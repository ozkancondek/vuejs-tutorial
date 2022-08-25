<template>
  <div class="app" :class="{ 'bg-dark': darkMode }">
    <div class="container pt-5  "  >
      <div v-if="loading">
        <div class="progress" style="height: 10px">
          <div class="progress-bar" role="progressbar" style="width: 60%"></div>
        </div>
      </div>
      <div v-if="!loading">
        <ListingsList :listings="listing"  />
      </div>
      <button
        class="btn mt-2"
        :class="{ 'btn-light': darkMode, 'btn-dark': !darkMode }"
        @click="toggleDarkMode"
      >
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import {useStore} from "vuex"
import ListingsList from "./components/ListingsList";
import { computed} from "vue"
import useDarkMode from "@/hooks/useDarkModes"
export default {
  name: "App",
  components: {
    ListingsList,
  },
  setup (){
    const store = useStore()
    const {darkMode,toggleDarkMode} = useDarkMode()
   // const isDark = ref(false);
    /***********DARK MODE***********/
    const darkModeButtonText = computed(()=>{
      return  darkMode.value ? "Helle Ansicht" : "Dunkle Ansicht";
    })
    // const toggleDarkMode = ()=>  {
    //   isDark.value = !isDark.value;
    // }
    /*****************************/

    const listing = computed(()=> store.getters.listings)
    const loading = computed(()=> store.getters.loading)


    store.dispatch("getListings")
    return{
      //isDark:darkMode,
      darkMode,
      darkModeButtonText,
      listing,
      loading,
      toggleDarkMode,


    }
  },
  // data() {
  //   return {
  //     isDark: false,
  //   };
  // },
  // computed: {
  //   ...mapGetters(["listings", "loading"]), // I cant use it in setup()
  //   darkModeButtonText() {
  //     return this.isDark ? "Helle Ansicht" : "Dunkle Ansicht";
  //   },
  // },
  // methods: {
  //   toggleDarkMode() {
  //     this.isDark = !this.isDark;
  //   },
  // },
  // created() {
  //   this.$store.dispatch("getListings");
  // },

};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>