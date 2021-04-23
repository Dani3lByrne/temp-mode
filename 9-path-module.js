const path = require('path')


console.log(path.sep) //check what symbol the system uses ie/ system"/"path

const filePath = path.join('/content/','subfolder','test.txt') //switches to correct symbol

console.log(filePath) // returns path


const base = path.basename(filePath) // returns filename (test.txt)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute) // returns absolute path to file. 