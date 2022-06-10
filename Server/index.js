import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import Cors from 'cors';
import Router from './routers/routes.js';
import {  Server, Socket } from 'socket.io'
import crypto from 'crypto'
dotenv.config();
const app = express();

app.use(bodyParser.json({extended  : true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(Cors());
app.use('/',Router);
const PORT =8000;
 const username = process.env.DB_USERNAME;
 const password = process.env.DB_PASSWORD;
 Connection(username,password);
const server= app.listen(PORT,()=>console.log(`server is successfully run on port ${PORT}`));
//data transerfer into database
// DefaultData();
const io= new Server(server,{
     cors:{
         origin:'http://localhost:3000',
         Credential:true
     }
 });
global.onlineUsers= new Map();
 io.on("connection",(Socket)=>{
     global.chatSocket=Socket;
     Socket.on("add-user",(userid)=>{
       console.log("Socket is on");
         onlineUsers.set(userid,Socket.id);
     })
  
 Socket.on("send-mssg",(data)=>{
    const sendUserSocket = onlineUsers.get(data.to);        
     if(sendUserSocket){
         Socket.to(sendUserSocket).emit("msg-receive",data.message);
     }
 })
})