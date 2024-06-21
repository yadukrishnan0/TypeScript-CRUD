import mongoose from 'mongoose';
const ConnetDb = async()=>{
    try{
      await mongoose.connect(process.env.URL as string)
      console.log('database connected successfully')
    }catch(error){
     console.log('Error connecting database',error)
    }
}
export default ConnetDb;