module.export = function(app) {
    $(function () {
        console.log("working-file")
        var allScores = require("../../routing/apiRoutes")
        var friendList = require("../../data/friends.js")
    
        var difference = []
    
        $("#submit").on("click", function (event) {
            event.preventDefault()
            console.log("working-button")
    
            // Validating the data
            function validateData() {
                var isValid = true
                $(".form-control").each(function () {
                    if ($(this).val() === "") {
                        isValid = false
                    }
                })
    
                $(".chosen-select").each(function () {
                    if ($(this).val() === "") {
                        isValid = false
                    }
                })
                return isValid
            }
    
            if (validateData()) {
                // Grabbing the data
                var newFriend = {
                    name: $("#name").val().trim(),
                    photo: $("#photo").val().trim(),
                    scores: [
                        $("#q1").val().trim(),
                        $("#q2").val().trim(),
                        $("#q3").val().trim(),
                        $("#q4").val().trim(),
                        $("#q5").val().trim(),
                        $("#q6").val().trim(),
                        $("#q7").val().trim(),
                        $("#q8").val().trim(),
                        $("#q9").val().trim(),
                        $("#q10").val().trim()
                    ]
                }
    
                // calculate the new users score total
                var newScores = newFriend.scores
                var newScoresArray = []
                for (let i = 0; i < newScores.length; i++) {
                    var scoreSum = newScores.reduce((a, b) => a + b, 0)
                    newScoresArray.push(scoreSum)
                }
    
                for (let i = 0; i < allScores.length; i++) {
                    var smallestDiff = allScores[0] - newScoresArray[0]
                    var calDiff = allScores[i] - newScoresArray[0]
    
                    if (calDiff > 0 && calDiff < smallestDiff) {
                        smallestDiff = calDiff
                        difference.push(smallestDiff)
                        difference.push(i)
                    } else {
                        Math.abs(calDiff)
                        smallestDiff = calDiff
                        difference.push(smallestDiff)
                        difference.push(i)
                    }
                }
    
                // Displaying Best Match
                var bestMatch = friendList[difference[1]]
                $("#match-name").text(bestMatch.name)
                $("#match-img").attr("src", bestMatch.photo)
                $("#results-model").modal("toggle")
    
                // Clearing the form
                $("#name").val("")
                $("#photo").val("")
                $("#q1").val("")
                $("#q2").val("")
                $("#q3").val("")
                $("#q4").val("")
                $("#q5").val("")
                $("#q6").val("")
                $("#q7").val("")
                $("#q8").val("")
                $("#q9").val("")
                $("#q10").val("")
    
            } else {
                alert("Please fill out all of the fields before submitting!")
            }
    
        })
    
    });

}

