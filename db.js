const mongoose = require("mongoose");

var mongoURL='mongodb+srv://user:satyendra@cluster0.zpehbec.mongodb.net/mern-room'

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo Db Connection failed')
})
connection.on('connected',()=>{
    console.log('Mongo Db Connection Successful')
})

module.exports = mongoose