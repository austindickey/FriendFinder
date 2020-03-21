var express = require("express")
var path = require("path")

var app = express()
var port = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/static', express.static(path.join(__dirname + '/public')));

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(port, function() {
    console.log("Server listening on port: " + port)
})