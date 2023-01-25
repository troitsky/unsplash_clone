const express = require('express')
const router = express.Router()
const {saveImageInfo, getImages, deleteImageInfo, checkPassword, findImage} = require('../controlers/imageControllers')


router.get('/', getImages)

router.get('/find/:label', findImage)

router.post('/upload', saveImageInfo)

router.delete('/:id', deleteImageInfo)

module.exports = router
