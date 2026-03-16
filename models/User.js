const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

fullName:{
type:String,
required:true,
trim:true,
minlength:3
},

email:{
type:String,
required:true,
lowercase:true,
unique:true,
match:/^\S+@\S+\.\S+$/
},

phone:{
type:String,
required:true,
unique:true,
match:/^[0-9]+$/
},

walletBalance:{
type:Number,
default:0,
min:0
},

isBlocked:{
type:Boolean,
default:false
},

kycStatus:{
type:String,
enum:["Pending","Approved","Rejected"],
default:"Pending"
},

deviceInfo:{
ipAddress:String,

deviceType:{
type:String,
enum:["Mobile","Desktop"]
},

os:{
type:String,
enum:["Android","iOS","Windows","macOS"]
}
}

},{timestamps:true})

userSchema.index({createdAt:-1})

module.exports = mongoose.model("User",userSchema)