var express = require("express")
var path = require("path")

var app = express()
var port = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var friendList = 
[
    {
        "name":"Ryan",
        "photo":"./img/Ryan.jpg",
        "scores":[
            4,
            5,
            2,
            4,
            4,
            3,
            3,
            4,
            4,
            3
        ]
    },
    {
        "name":"James",
        "photo":"./img/James.jpg",
        "scores":[
            3,
            3,
            4,
            4,
            1,
            3,
            2,
            5,
            2,
            2
        ]
    },
    {
        "name":"Seth",
        "photo":"./img/Seth.jpg",
        "scores":[
            5,
            1,
            3,
            1,
            5,
            1,
            4,
            2,
            5,
            5
          ]
    },
    {
        "name":"Emma",
        "photo":"./img/Emma.jpg",
        "scores":[
            5,
            2,
            4,
            3,
            4,
            2,
            4,
            4 ,
            4,
            4
          ]
    },
    {
        "name":"Sophia",
        "photo":"./img/Sophia.jpg",
        "scores":[
            2,
            4,
            5,
            5,
            2,
            3,
            4,
            5,
            3,
            3
          ]
    },
    {
        "name":"Penny",
        "photo":"./img/Penny.jpg",
        "scores":[
            3,
            1,
            1,
            1,
            5,
            1,
            1,
            1,
            5,
            5
          ]
    }
]

require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

app.listen(port, function() {
    console.log("Server listening on port: " + port)
})