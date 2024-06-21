import express from 'express';
import dotenv from  'dotenv';
import dbconnection from './config/dbConnection'
import { urlencoded } from 'body-parser';

const app =express();
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
dbconnection().then(()=>{
    app.listen(3000,()=>{
        console.log('server runingg.......')
    })
}).catch(err=>{
    console.log('failed to connect to the database',err)
})
