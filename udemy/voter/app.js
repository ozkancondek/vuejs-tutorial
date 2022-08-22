
//configuration
const app = Vue.createApp({

    data :function () {
        return {
            submissions : submissions //from seed.js
        }

    }

})


//creation
const vm = app.mount("#app");

