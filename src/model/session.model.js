const mongoose = require('mongoose');


const sessionSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: [true,"userId is required"],
    },
    refreshTokenHash:{
        type:String,
        required:[true,"refreshTokenHash is required"],
    },
    userAgent:{
        type:String,
        required:[true,"userAgent is required"],
    },
    revoked:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
})


const sessionModel = mongoose.model("sessions",sessionSchema);

module.exports = sessionModel;  