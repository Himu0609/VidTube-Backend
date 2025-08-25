
// src/index.js
import 'dotenv/config';                  // ✅ .env first

import { setDefaultResultOrder } from 'node:dns';
setDefaultResultOrder('ipv4first');      // optional, helps on some ISPs

import connectDB from './db/index.js';

connectDB();                             // call once







/*
import express from "express"
const app = express()
(async ()=>{
    try{
        await mongoose.connect(`${process.env.DATABASE_URI}/ ${DB_NAME}`)
        app.on("error" ,(err)=>{
            console.log(err,"Having Troble With Connecting Database")
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`)
        })
    }
    catch (error){
        console.error(error )
    }
})()
    */