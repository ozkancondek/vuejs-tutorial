//configuration
const app = Vue.createApp({

    data: function () {
        return {
            submissions: submissions, //from seed.js
            totalVotes: 0
        }

    },
    // computed : {
    //
    //     totalVotes (){
    //         return  this.submissions.reduce((totalVotes,submission)=>{
    //             return totalVotes + submission.votes
    //         },0)
    //     }
    //
    // },

    methods: {
        // increaseVote :function  () {
        //     submissions[0].votes++
        //
        // }
        //   dont use arrow function
        upvote(consoleText, event) {
            this.submissions[0].votes++
            // console.log(event)
            // console.log(consoleText)
        },
        logConsole(text) {
            console.log(text)

        },

    },
    watch: {//works for every possible change in data

        // submissions(newValue, oldValue) {
        //     console.log(newValue)
        //     console.log(oldValue)
        // },
        submissions: { //this one is long version of function above
            handler(newValue, oldValue) {
                this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
                    return totalVotes + submission.votes
                }, 0)

            },
            deep: true, //watching
            immediate: true // take data when mounted. start with first value when its false
        },
        totalVotes(newValue,oldValue) {
            console.log(oldValue)
            console.log(newValue)
        }


    }

})


//creation
const vm = app.mount("#app");

