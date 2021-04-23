// OS MODULE

const os = require('os')

//info about current user:

const user = os.userInfo()
// console.log(user)

//return system runtime in seconds: 


console.log(`System uptime is: ${os.uptime()}`)


// const mins = os.uptime () / 60

// console.log(`${mins}`)

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

// console.log(currentOS.totalMem)
console.log(currentOS)
 