const UploadPhoto = require('../models/uploadPhotoSchema')

async function getImageLinks(req, res, next) {
    const images = await UploadPhoto.find()
    const URLs = images.map(img => img.url)
    res.send(URLs)
  }

async function findImage(req, res, next) {
    const searchText = req.params.label;
    try {
        const image = await UploadPhoto.find({label: searchText})
        res.send(image)
    } catch(err) {
        console.log("Error occured while searching for single image: ", err)
    }
}


function saveImageInfo(req, res, next) {
    console.log('uploading')
    console.log('req body: ', req.body)
    const photo = new UploadPhoto({
        label: req.body.label,
        url: req.body.url
    })

    photo.save()
    .then(res.status(200).send('image downloaded'))
    .catch(err => console.log('Error saving image: ', err))
}

function deleteImageInfo(req, res, next) {
    UploadPhoto.findOneAndDelete({_id: req.params.id}, (err, deleted) => {
        if (err) {console.log(err)}
        else {console.log("Deleted image: ", deleted)}
    })

    res.redirect('/')
}

function checkPassword(req, res, next) {
    console.log('checking password')
    const userPassword = req.query.password
    if (userPassword === "password") {
        console.log('password accepted')
        next()
    } else {
        console.log('password not ok')
        res.send("password not ok")
    }
}

module.exports = {saveImageInfo, getImageLinks, deleteImageInfo, checkPassword, findImage}