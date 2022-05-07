const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('mongo connected with your server')
    }
    catch(error){
        console.log(error.message)
        process.exit(1)
    }
}
module.exports=connectDB