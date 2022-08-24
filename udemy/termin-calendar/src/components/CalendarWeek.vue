<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for = "day in  calendarWeekData " :key="day.id"  :day="day"/>
      <!-- Ende: Template für die Calendar-Day-Component -->
    </div>
  </div>
</template>
<script>
import Store from "../store"
import CalendarDay from "@/components/CalendarDay";
export default {
  name:"CalendarWeek",
  components: {CalendarDay},
  data (){
    return {
      calendarWeekData:Store.state.calendarWeekData, //readonly
    }
  }
}
</script>
<style scoped>



</style>