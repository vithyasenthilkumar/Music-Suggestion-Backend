const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema(
    {
        originalname:{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        size:{
            type:Number,
            required:true
        },
        mimetype:{
            type:String,
            required:true
        },
        destination:{
            type:String,
            required:true
        },
        filename: {
            type:String,
            required:true,
            unique:true,
            index:true
        },
        filePath:{
            type:String,
            required:true,
            unique: true,
            index:true
        }
    },
    {
        collection:'files'
    }
)

module.exports = mongoose.model('files', fileSchema)