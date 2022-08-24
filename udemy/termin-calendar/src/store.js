
import {calendarWeekData} from "./seed"
import {reactive,readonly} from "vue" //reactivate data with vue
const state = reactive({
    calendarWeekData,
})

const getters = {
    activeDay : ()=> state.calendarWeekData.find(day=>day.active)
}

const mutations = {
    editEvent(dayId,eventTitle){
        state.calendarWeekData.map((dayObj)=>{
            dayObj.events.map((event)=>event.edit=false)
        });
        const dayObj = state.calendarWeekData.find((day)=>day.id === dayId)
        const eventObj = dayObj.events.find((event)=> event.title === eventTitle)
        eventObj.edit =true;
    },
    deleteEvent(dayId,eventTitle){
        const dayObj = state.calendarWeekData.find((day)=>day.id === dayId)
        const eventIndex = dayObj.events.findIndex((event)=>event.title === eventTitle)
        dayObj.events.splice(eventIndex,1)

    },
    updateEvent(dayId,oldEventTitle,newEventTitle){
        newEventTitle=newEventTitle !== "" ? newEventTitle : oldEventTitle
        const dayObj = state.calendarWeekData.find((day)=>day.id === dayId)
        const eventObj = dayObj.events.find((event)=> event.title === oldEventTitle)
        eventObj.title =newEventTitle;
        eventObj.edit=false

    }
}

export default {
    state:readonly(state), //i can read only but cant change
    getters,
    mutations
}
//Sample day
// {
//     id: 1,
//         shortName: "Mo",
//     fullName: "Montag",
//     events: [
//     { title: "Vue.js lernen", edit: false, color: "success", priority: 0 },
//     { title: "Üben, üben, üben", edit: false, color: "info", priority: -1 },
// ],
//     active: false,
// },