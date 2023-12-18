 const express=require('express');
 const cookieParser=require('cookie-parser');
 const bodyParser = require("body-parser");
 const fileUpload = require("express-fileupload");
 const cors=require('cors');
 const path = require("path");
 const app=express();
 const dotenv=require('dotenv');

 const errorMiddlewWare=require('./middleware/error');
 app.use(express.json());
 app.use(cookieParser());
 
 const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type']
  };
  
 app.use(cors(corsOptions));
 //config
 dotenv.config({path:"./backend/config/config.env"});


 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json({ limit: '10mb' }));
 app.use(fileUpload());
  

 //Routes
 const user=require('./routes/userRoute');
 const supportAgent=require('./routes/supportRoute');


 //User
 app.use("/api/v1",user);
 app.use('/support-agent',supportAgent)
 
//  //Product
//  app.use("/api/v1",product);

//  // order
//  app.use("/api/v1",order);

//  //payment
//  app.use("/api/v1",payment);

  



 // Error MiddleWare
 app.use(errorMiddlewWare);
   
module.exports=app;