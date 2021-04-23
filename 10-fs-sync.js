// sync = blocking , non-sync = non blocking code

const {readFileSync, writeFileSync} = require('fs'); // same as fs.readFileSync



//what is path and what is encoding. 


//read file content
console.log('start...')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//write to a new file

writeFileSync('./content/result-sync.txt', `Here is the result: ${first} , ${second}`, {flag: 'a'})
// adding {flag: 'a'} appends to the file instead of overwriting. 

console.log('done with this task')
console.log('starting next task')

//only starts a task when previous is completed. Bad for multi user apps. 