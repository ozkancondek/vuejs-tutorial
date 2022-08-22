//asyncron feature of js
// setTimeout(() => {
//     console.log("Hallo nach 2 sekunden")
// }, 2000)
//
// console.log("Hallo")

//what if i want to see first output first

const greeting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Here is greetin output");
            resolve("completed");
    },2000)
})

// const startGreeting = ()=>{
//         //greeting comes first then goes to then block
//         greeting.then((result)=>{
//             console.log(result)
//             console.log("here is written in the end")
//         }).catch((e)=>{console.log(e)})
// }

const startGreeting = async ()=>{

    try {
        const result = await greeting;
        console.log(result)
        console.log("Hello")
    } catch (e) {
        console.log(e)
    }
}
startGreeting()

//output
// Here is greetin output
// completed
// here is written in the end
