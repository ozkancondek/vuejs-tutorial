
import {calendarWeekData} from "./seed"
import {reactive,readonly} from "vue" //reactivate data with vue
const state = reactive({
    calendarWeekData,
})

const getters = {
    activeDay : ()=> state.calendarWeekData.find(day=>day.active)
}

const mutations = {}

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