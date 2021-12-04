const mongoose = require('mongoose')

const uri = {
    urlAtlas: "mongodb+srv://admin:123@scannerdni.kgpu1.mongodb.net/scannerdni?retryWrites=true&w=majority",
    urlLocal: 'mongodb://localhost:27017/test1',
    urlCompass: 'mongodb+srv://admin:123@scannerdni.kgpu1.mongodb.net/scannerdni'
}


mongoose.connect(uri.urlCompass, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose

