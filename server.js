const express=require('express');
const server=express();
const mongoose=require('mongoose');
var routes=require('./routes/router');
const cors=require('cors');


mongoose.connect("mongodb://127.0.0.1:27017/est",{useNewUrlParser:true,useUnifiedTopology:true},

).then(()=>console.log("db connected"))
.catch((error)=>{console.log(error);});


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000,
   (error)=>
   {
    if(error)
     console.log(error);
     else  
     console.log("server started");
   
});
