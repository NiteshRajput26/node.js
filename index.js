// import mongoose from "mongoose";
// import app from "./app.js"

// // ()() iffe 1.() simple method  2.() run the method
// (async () =>{
//     try{
//    await  mongoose.connect("mongodb://localhost:27017/gitsetup")
//    console.log("DB CONNECTED");

//    const onListening = () =>{
//     console.log("Listening on PORT 5000");
//    }
// // onListening provide refrence only not a method
//    app.listen(5000, onListening)
//     }catch (error){
//         console.error("error:" ,error);
//         throw err;
//     }
//   // express
// })()


const express = require('express');

const server = express();

server.get('/',(req,res)=>{
  res.json({type:'GET'});
})
server.post('/',(req,res)=>{
  res.json({type:'POST'});
})
server.put('/',(req,res)=>{
  res.json({type:'PUT'});
})
server.delete('/',(req,res)=>{
  res.json({type:'DELETE'});
})
server.patch('/',(req,res)=>{
  res.json({type:'PATCH'});
})




server.get('/demo',(req,res)=>{
 // res.sendStatus(404);
 // res.json(products);
 // res.send('<h1>hello<h1>');
 res.status(201).send('<h1>hello<h1>');

})
server.listen(8080,()=>{
  console.log('server started');
});


















