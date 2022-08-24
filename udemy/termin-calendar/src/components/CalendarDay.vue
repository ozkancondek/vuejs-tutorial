<template>
  <div class="card border-start" :class = "cardClasses">
    <div class="card-header text-center" role="button" :class="cardHeaderClasses"
    @click="setActiveDay()"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">

      <CalendarEvent v-for  = "event in day.events" :key="event.title" :event="event" :day="day">
       <!-- template v-slot:eventPriority = "slotProps">-->
        <template #eventPriority = "slotProps">
         <h5>{{slotProps.priorityDisplayName}}</h5>
       </template>
        <template #default="{event:entry}"><i>{{entry.title}}</i></template>
      </CalendarEvent>

    </div>
  </div>

</template>
<script>
import CalendarEvent from "@/components/CalendarEvent";
import Store from "../store"

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

  },
  computed : {
    //get active day and compare with current day if its active
    cardClasses(){
        return this.day.id === Store.getters.activeDay().id ? ["border-primary"] : null
    },
    cardHeaderClasses(){
      return this.day.id === Store.getters.activeDay().id ? ["bg-primary","text-white"] : null
    }
  },
  methods:{
    setActiveDay(){
      Store.mutations.setActiveDay(this.day.id);

    }
  }
}
</script>
<style scoped></style>