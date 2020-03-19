var friendList = require("../data/friends.js")

var allScores = []

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendList)
    })
    
    app.post("/api/friends", function(req, res) {
        allScores = []
        for (let i = 0; i < friendList.length; i++) {
            var calculating = friendList[i].scores
            var scoreSum = calculating.reduce((a, b) => a + b, 0)
            allScores.push(scoreSum)
        }

        module.exports = allScores
    })
}

