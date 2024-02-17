import mongoose from "mongoose";
import app from "./app.js"

// ()() iffe 1.() simple method  2.() run the method
(async () =>{
    try{
   await  mongoose.connect("mongodb://localhost:27017/gitsetup")
   console.log("DB CONNECTED");

   const onListening = () =>{
    console.log("Listening on PORT 5000");
   }
// onListening provide refrence only not a method
   app.listen(5000, onListening)
    }catch (error){
        console.error("error:" ,error);
        throw err;
    }
  // express
})()
