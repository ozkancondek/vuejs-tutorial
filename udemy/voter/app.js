
//configuration
const app = Vue.createApp({

    data :function () {
        return {
            submissions : submissions //from seed.js
        }

    },
    methods : {
      // increaseVote :function  () {
      //     submissions[0].votes++
      //
      // }
      //   dont use arrow function
        upvote (){
            this.submissions[0].votes++

        }
    }

})


//creation
const vm = app.mount("#app");

