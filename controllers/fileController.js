const { response } = require('express')
const fileModel = require('../models/fileModel')
const PORT = 3500

const getAllSongsWithThumbnails = async(request, response) =>{
    try{
        const thumbNailImages = await fileModel.find({mimetype:'image/jpeg'})
        response.status(200).json(thumbNailImages)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }
}

const getFileByName = (request, response) =>{
    const filename = request.params.filename
    const parentDirectory = (__dirname).split('\controllers')[0]
    const filePath = parentDirectory + "/assets/" + filename
   
    response.status(200).sendFile(filePath)
}

const uploadFile = async(request, response) => {
    if(!request.file)
    {
        return response.status(400).json({ErrorMessage:'No file was uploaded.'})
    }
    const {originalname, size, mimetype, destination, filename} = request.file;

    try{
        const existingFile = await fileModel.findOne({originalname:originalname})
        if (existingFile)
        {
            return response.status(409).json({ErrorMessage:'File already exists'})
        }

        const filePath = `http://localhost:${PORT}/api/v1/music/assets/`+filename

        
        const fileData = {
            originalname: originalname,
            size:size,
            mimetype:mimetype,
            destination:destination,
            filename:filename,
            filePath:filePath
        }

        const newFileData = await fileModel.insertMany(fileData)
        console.log(newFileData);
        response.status(200).json(newFileData)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }

}

module.exports = {getAllSongsWithThumbnails,getFileByName,uploadFile}