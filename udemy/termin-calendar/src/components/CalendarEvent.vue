<template>
  <div id="calendar-event">
    <div class="alert text-center" :class ="alertColor" >
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
         <input ref="newEventTitleInput"  type="text" class="form-control" :placeholder="event.title" @input="setNewEventTitle($event)"/>
        <select class="form-select mt-2"  v-model="newEventPriority">
          <option value="-1">Hoch</option>
          <option value="0">Mittel</option>
          <option value="1">Tief</option>
        </select>
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
      newEventTitle:"",
      newEventPriority:this.event.priority

    }
  },
  methods : {
    deleteEvent(){
      Store.mutations.deleteEvent(this.day.id,this.event.title)
    },
    editEvent(){
      Store.mutations.editEvent(this.day.id,this.event.title)
      //Reach to input with ref
      this.$nextTick(()=>{
        this.$refs.newEventTitleInput.focus()
      })

;    },
    setNewEventTitle(event){
      this.newEventTitle = event.target.value //how shoul i know target

    },
    updateEvent(){
      Store.mutations.updateEvent(
          this.day.id,
          this.event.title,
          {
          title:  this.newEventTitle,
            priority: this.newEventPriority
          }
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