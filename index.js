

// const http = require('http')

// const server = http.createServer((req , res) =>{
    
//                                          // res.statusCode=404                              (dima yetketbou 9bal el "writes")
//                                          // res.setHeader("Content-type" , "text/html" )    (dima yetketbou 9bal el "writes")

//     res.write('hello\n')
//     res.write('welcom to node.js\n')
//     res.write("Fawzii\n")
//     res.write("hammadi")
    

//     res.end('\n done')

// })

// server.listen(5000 , ()=> console.log("server is running") )






// const http = require('http')

// const server = http.createServer((req , res)=>{
 
//     if (req.url =='/about' ) {
//         res.write('Welcome to about page ')

//     }else if (req.url =='/home') {
//         res.write('Welcome to home page ')

//     }else{
//         res.write('not found page ')
//     }

//     res.end()

// })

// server.listen(5000)













const http = require('http')

const server = http.createServer((req , res) =>{

    res.write('first server\n')

    res.end('\n done')

})

server.listen(5000 , ()=> console.log("server is running") )





