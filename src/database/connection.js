const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://maxmendes:kf050509@cluster0.n7vq7.mongodb.net/doeiapp?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
mongoose.Promise = global.Promise

module.exports = mongoose