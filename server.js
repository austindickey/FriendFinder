var express = require("express")
var path = require("path")

var app = express()
var port = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

app.listen(port, function() {
    console.log("Server listening on port: " + port)
})