const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://ganendhar:Gani7708@cluster0.y0p81dn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true  
}).then(()=>{
    console.log("Connected to the databse")
}).catch((err)=>{
    console.log("Something went wrong while connecting to the databse",err.message);
    console.log(err)
});

