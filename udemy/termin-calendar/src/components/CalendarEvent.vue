<template>
  <div id="calendar-event">
    <div class="alert text-center" :class ="alertColor">
     <template v-if="!event.edit  ">
       <div>
         <!--        <strong>{{priorityDisplayName}}</strong>-->
         <slot name = "eventPriority"
               :priorityDisplayName = "priorityDisplayName"
         >
           <strong>{{priorityDisplayName}}</strong>-
         </slot>
       </div>

       <!--      <div>{{event.title}}</div>-->
       <slot :event="event">

         <div>{{event.title}}</div>
       </slot>


       <div>
         <i class="fas fa-edit me-2" role="button" @click = "editEvent"></i>
         <i class="far fa-trash-alt" role="button" @click="deleteEvent"></i>
       </div>
     </template>
      <template v-else>
         <input  type="text" class="form-control" :placeholder="event.title" @input="setNewEventTitle($event)"/>
        <div>{{newEventTitle}}</div>
        <hr>
        <i class="fas fa-check" @click="updateEvent" role="button"></i>
      </template>
    </div>
  </div>
</template>
<script>
import Store from "../store"
export default {
  name:"CalendarEvent",
  props : {
    event : {
      type : Object
    },
    day: {
      type:Object
    }
  },
  data(){
    return {
      newEventTitle:""

    }
  },
  methods : {
    deleteEvent(){
      Store.mutations.deleteEvent(this.day.id,this.event.title)
    },
    editEvent(){
      Store.mutations.editEvent(this.day.id,this.event.title)
    },
    setNewEventTitle(event){
      this.newEventTitle = event.target.value //how shoul i know target

    },
    updateEvent(){
      Store.mutations.updateEvent(
          this.day.id,
          this.event.title,
          this.newEventTitle
      )
    }
  },
  computed:{
    priorityDisplayName() {
      switch (this.event.priority){
        case 1:
              return "Tief";
        case 0 :
          return "Mittel";
        case -1:
          return "Hoch"

      }
      return "Unnbekante Priorität"
    },
    alertColor() {
      return "alert-" + this.event.color
    }


  }
}
</script>

<script scoped></script>