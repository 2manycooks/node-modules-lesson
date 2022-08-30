// we need to require our module here with require, feeding it a string of the path to the file we are using

// let myModule = require('./myModule')

// console.log(module.exports)

// there are built-in modules too! Here is the File System, or 'fs', module, at work!

// let fs = require('fs')

// fs.writeFile('story.txt', 'while I pondered, weak and weary', function(err) {
//     if(err) {
//         console.log("whoops")
//     } else {
//         console.log("ya did it!")
//     }
// })

// fs.readFile('story.txt', 'utf-8', function(err, data) {
//     if(err) {
//         console.log("there was a problem reading this file")
//     } else {
//         console.log(data)
//     }
// })

// let's create an HTTP core module!

// let http = require('http')

// let host = 'localhost'
// let port = 3000

// let server = http.createServer()

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`)
//     console.log('hello world!')
// })