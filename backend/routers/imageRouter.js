const express = require('express')
const router = express.Router()
const {saveImageInfo, getImageLinks, deleteImageInfo, checkPassword, findImage} = require('../controlers/imageControllers')


router.get('/', getImageLinks)

router.get('/find/:label', findImage)

router.post('/upload', saveImageInfo)

router.delete('/:id', checkPassword, deleteImageInfo)

module.exports = router
