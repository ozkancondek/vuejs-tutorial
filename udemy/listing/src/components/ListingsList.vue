<template>
  <div id="listings">
    <Notification :notification="notification" :toggleNotification = "toggleNotification" />
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="listing in listings" :key="listing.id">
        <ListingsListItem :listing="listing" />
      </div>
    </div>
    <button
      class="btn btn-primary mt-2"
      @click="resetListings"
      :disabled="listings.length === 3"
    >
      Reset
    </button>
  </div>
</template>

<script>

import ListingsListItem from "./ListingsListItem";
import Notification from "./Notification";
import {onMounted} from "vue"
import {useStore} from "vuex"
import useNotification from "@/hooks/useNotification"
import useDarkMode  from "@/hooks/useDarkModes"

export default {
  name: "ListingsList",
  props: ["listings" ],
  setup (){
    const {notification,setNotification,toggleNotification} = useNotification();
    const {darkMode} = useDarkMode()
    const store = useStore()
    //const notification = ref(null)
    const resetListings = ()=>{
      setNotification("Liste wurde zurückgesetz")
      store.dispatch("resetListings")
    }
    onMounted(()=>{
      setNotification("Herzlich Wilkommen")
      // notification.value = "Herzlich Wilkommen"
      // setTimeout(()=>{
      //   notification.value = null
      // })
    })


    return {
      darkMode,
      notification,
      resetListings,
      toggleNotification


    }
  },
  // data() {
  //   return {
  //     notification: null,
  //   };
  // },
  // methods: {
  //   ...mapActions(["resetListings"]),
  // },
  components: {
    ListingsListItem,
    Notification,
  },
  // mounted() {
  //   this.notification = "Herzlichen Willkommen!";
  //
  //   setTimeout(() => {
  //     this.notification = null;
  //   }, 3000);
  // },
};
</script>
