// HTTP module
const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('HOME PAGE TEST')    
}
if(req.url === '/about'){
    res.end('this is the about page')
} 
//  res.end('page not found') not working!

})

server.listen(5000)



// req and res is common practice for callback params
//both are objects. request - incoming request. 

//sharable javascript code - package, dependancy, module. la stessa cosa. 
// no package control on NPM. a lot of useless packages. 
// 