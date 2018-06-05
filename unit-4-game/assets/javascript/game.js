//Computer generates a random number
//
$(document).ready(function() {

    var computerNumber = Math.floor(Math.random() * (120 - 19) + 19);

    // console.log(computerNumber)
    $("#computerGuess").html("<p>" + "Points to get: " + "</p>" + computerNumber);

    var gemOne = Math.floor(Math.random() * 11 + 1);
    var gemTwo = Math.floor(Math.random() * 11 + 1);
    var gemThree = Math.floor(Math.random() * 11 + 1);
    var gemFour = Math.floor(Math.random() * 11 + 1);
    var score= 0; 
    var wins= 0;
    var losses = 0;

    $("#wins").html("<p>" + "Wins: " + wins + "</p>");
    $("#losses").html("<p>" + "Losses: " + losses + "</p>");
    $("#scorebox").html("<p>" + "Your points: " + score + "</p>");

    function win() {
        alert("You won! Keep playing!")
        wins++;
        $("#wins").html("<p>" + "Wins: " + wins + "</p>");
        reset ();
    }

    function lose() {
        alert("You lost! Try again.")
        losses++;
        $("#losses").html("<p>" + "Losses: " + losses + "</p>");
        reset ();
    }

    function reset() {
        computerNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#computerGuess").html("<p>" + "Points to get: " + "</p>" + computerNumber);
        gemOne = Math.floor(Math.random() * 11 + 1);
        gemTwo = Math.floor(Math.random() * 11 + 1);
        gemThree = Math.floor(Math.random() * 11 + 1);
        gemFour = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
    }

    $("#gemOne").click(function() {
        score = score + gemOne;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })
    
    $("#gemTwo").click(function() {
        score = score + gemTwo;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })

    $("#gemThree").click(function() {
        score = score + gemThree;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })

    $("#gemFour").click(function() {
        score = score + gemFour;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })
});
