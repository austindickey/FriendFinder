var friendList = require("../data/friends.js") 

module.exports = function(app) {
    var allScores = []
    var difference = []
    var differenceSorted = []
    app.get("/api/friends", function(req, res) {
        return res.json(friendList)
    })
    
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body
        
        for (let i = 0; i < newFriend.scores.length; i++) {
            var num = parseInt(newFriend.scores[i])
            newFriend.scores[i] = num
        }

        friendList.push(newFriend)
        
        for (let i = 0; i < friendList.length; i++) {
            var calculating = friendList[i].scores
            var scoreSum = calculating.reduce((a, b) => a + b, 0)
            allScores.push(scoreSum)
        }

        var highestIndex = allScores.length - 1
        
        for (let i = 0; i < allScores.length; i++) {
            var diffSum = Math.abs(allScores[highestIndex] - allScores[i])

            difference.push(diffSum)
            differenceSorted.push(diffSum)
        }

        differenceSorted.sort(function(a, b){return a - b})

        var lowestDiff = differenceSorted[1]

        var matchIndex = []

        for (let i = 0; i < difference.length; i++) {
            if (lowestDiff === difference[i]) {
                matchIndex.push(i)
            }
        }

        var bestMatch = friendList[matchIndex[0]]
        res.json(bestMatch)

        allScores = []
        difference = []
        differenceSorted = []
        matchIndex = []
    })
}