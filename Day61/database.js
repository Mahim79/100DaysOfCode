const mongoose = require("mongoose")
const mongoURI = 'mongodb+srv://mahimdewan79:Y(2tL7Qhgvppm5f@cluster1.eprwc.mongodb.net/myWeb'

mongoose.connect(mongoURI)
.then(()=> console.log("Database connected successfully")
)
.catch(err=> console.log(err)
)

module.exports.mongoDB = mongoose