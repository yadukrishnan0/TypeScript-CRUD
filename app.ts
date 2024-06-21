import express from 'express';
import dotenv from  'dotenv';
import dbconnection from './config/dbConnection'
import { urlencoded } from 'body-parser';
import ProductRouter from './routers/productRouter';
const app =express();
dotenv.config()
const port = process.env.port
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',ProductRouter)
dbconnection().then(()=>{
    app.listen(port,()=>{
        console.log(`${port} server runingg.......`)
    })
}).catch(err=>{
    console.log('failed to connect to the database',err)
})
