//npm - global command, comes with node
// npm --version 

//local dependency - use it only in this project
// npm i <package name>

//global dep - use it in any project
// npm install -g package name

//package.json - manifest files (info about project/package)
//manual - create package.json in the root. create properties etc
//npm init (step by step - enter to skip)
//npm init -y (yes to all default)

//package name has to be unique if you want to publish

//why need package.json
//if want to install package locally its stored as a dependancy. 

const _ = require('lodash')  // using _ is common practice

const items = [1,[2,2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newItems)