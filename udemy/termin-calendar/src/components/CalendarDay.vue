<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">

      <CalendarEvent/>

    </div>
  </div>

</template>
<script>
import CalendarEvent from "@/components/CalendarEvent";

export default {
  name: "CalendarDay",
  components: {CalendarEvent},
  //props:["day"]
  props: {
    day: {
      type: Object,
      required: true,
      //default value
      default: () => {
        return {
          id: -1,
          fullName: "Error",
          events: []

        }
      },
      //check if sended props contains desired condition
      validator: (value)=>{
        if(Object.keys(value).includes("id")){
          return true
        }
      }
    }

  }
}
</script>
<style scoped></style>