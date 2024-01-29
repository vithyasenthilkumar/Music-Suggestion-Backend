const express = require('express')
const router = express.Router()
const {getAllSongsWithThumbnails, getFileByName, uploadFile} = require('../controllers/fileController')
const fileUpload = require('../middlewares/fileUpload')
const { heartRate } = require('../controllers/rateController')

router.route('/').get(getAllSongsWithThumbnails)

router.route('/assets/:filename').get(getFileByName)

router.route('/upload').post(fileUpload.single('file'),uploadFile)
router.route('/:rate').get(heartRate)

module.exports = router