//configuration
const app = Vue.createApp({

    data: function () {
        return {
            submissions: submissions, //from seed.js
            // totalVotes: 0,

        }

    },
    computed: {

        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes
            }, 0)
        },
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;

            })
        },
        cardHeaderBackgroundColor() {
            // return {
            //     'bg-primary': this.totalVotes >= 50,
            //     'text-white': this.totalVotes >= 50
            //
            //     //alternative
            //     //"bg-primary text-white" : this.totalVotes >= 50
            // }
            if (this.totalVotes >= 50) {
                return ["bg-primary", "text-white"]
            }
        },
        cardTitleFontSize() {
            return {
                fontSize: this.totalVotes + 'px'
            }
        }
    },

    methods: {
        // increaseVote :function  () {
        //     submissions[0].votes++
        //
        // }
        //   dont use arrow function
        // upvote(submissionId) {
        //     const submission = this.submissions.find(
        //         (submission) => submission.id === submissionId
        //     );
        //     submission.votes++;
        //     //this.submissions[0].votes++
        //     // console.log(event)
        //     // console.log(consoleText)
        // },


    },
    watch: {//works for every possible change in data

        // submissions(newValue, oldValue) {
        //     console.log(newValue)
        //     console.log(oldValue)
        // },
        // submissions: { //this one is long version of function above
        //     handler(newValue, oldValue) {
        //         this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
        //             return totalVotes + submission.votes
        //         }, 0)
        //
        //     },
        //     deep: true, //watching
        //     immediate: true // take data when mounted. start with first value when its false
        // },
        totalVotes(newValue, oldValue) {
            console.log(oldValue)
            console.log(newValue)
        }


    }

})
//Global Components

app.component("SubmissionListItem", {
    //Options
    props:["submission"],
    methods:{
        upvote( ) {
            this.submission.votes++
        },
    },
    template: `
     <div class="d-flex">
        <div class="d-shrink-0">
            <img v-bind:src="submission.img" alt="">
        </div>
        <div class="flex-grow-1 ms-3">
            <h5>{{submission.title}}
                <span v-on:click="upvote()" class="float-end text-primary"
                      style="cursor:pointer"><i
                        class="fa fa-chevron-up"></i>
        <strong>{{submission.votes}}</strong>
        </span></h5>
            <div>{{submission.desc}}</div>
            <small class="text-muted">Eingerichtet von : {{submission.author}}</small>
        </div>
    </div>
    `
})

//creation
const vm = app.mount("#app");

