
import {calendarWeekData} from "./seed"
import {reactive,readonly} from "vue" //reactivate data with vue
const state = reactive({
    calendarWeekData,
})

const getters = {}

const mutations = {}

export default {
    state:readonly(state), //i can read only but cant change
    getters,
    mutations
}