
const {readFile, writeFile} = require('fs'); 
console.log('start')
//need to provide callback. run once we have finished. likw add event listener on button. 

readFile('./content/first.txt', 'utf8', (err,result) => {

    if(err){
        console.log(err)
        return
    }
    const first = result; 
   
    readFile('./content/second.txt','utf8', (err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
    
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first} , ${second}`
    ,(err,result)=>{
        if(err){
         console.log(err)
         return
        }
        console.log('task done')
    })

    })



})
console.log('starting next text')

//returns a buffer, if we don't provide encoding. utf8

//because running async task is offloaded and we continue with code. 
//app can serve other users whilst performing task. 

// 