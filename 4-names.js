//what ever we put in value of the export object 
//we decide what is accessible. 
//i.e. share names but not secret. 

//local
const secret = 'THIS IS A SECRET'

//share
const john = 'john jones'
const peter = 'peter'

// console.log(module)

module.exports = { john, peter }
//we are creating an object and setting up properties. 