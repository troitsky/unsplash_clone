const express = require('express')
const router = express.Router()
const {saveImageInfo, getImageLinks, deleteImageInfo, checkPassword} = require('../controlers/imageControllers')


router.get('/', getImageLinks)

router.post('/upload', saveImageInfo)

router.delete('/:id', checkPassword, deleteImageInfo)

module.exports = router
