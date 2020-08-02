// call for express
const express = require('express')
const app = express()

// apply css styles to the app
app.use(express.static('public'))

// export the app settings to other files
module.exports = {
    app
}