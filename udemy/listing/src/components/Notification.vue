<template>
  <div
    v-if="notification.active"
    class="alert alert-dismissible"
    :class="{ 'alert-light': darkMode, 'alert-dark': !darkMode }"
  >
    {{ notification.message }}
    <butt type = "button" class="btn-close" data-bs-dismiss = "alert" @click="toggleNotification"></butt>
  </div>
</template>

<script>
import useDarkMode from "@/hooks/useDarkModes"
export default {
  name: "Notification",
  props: ["notification","toggleNotification"],
  setup(){
    const darkMode = useDarkMode()
    return{
      darkMode
    }
  }
};
</script>
