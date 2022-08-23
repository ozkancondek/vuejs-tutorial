//configuration
const app = Vue.createApp({

    data: function () {
        return {
            submissions: submissions //from seed.js
        }

    },
    methods: {
        // increaseVote :function  () {
        //     submissions[0].votes++
        //
        // }
        //   dont use arrow function
        upvote(consoleText,event) {
            this.submissions[0].votes++
            // console.log(event)
            // console.log(consoleText)
        },
        logConsole (text) {
            console.log(text)

        }
    }

})


//creation
const vm = app.mount("#app");

