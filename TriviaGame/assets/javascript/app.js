$(document).ready(function() {

    var number = 60;
    var intervalId;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    function hide(){
        $('#triviaQuestions').hide();
        $('#time').hide();
        $('#done').hide();
    }
    
    function show() {
        $('#triviaQuestions').show();
        $('#time').show();
        $('#done').show();
    }

    hide ();
    
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });
    
    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        results();
        stop();
    });

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    function decrement() {
        number--;
        $("#timer").html("<div class='col-lg-12 text-center'>" + "Time remaining: " + number + " seconds");
        
        if (number === 0) {
            $('#start').hide();
            hide();
            results();
            stop();
        }
    }

    function results(){
        var alldone = $('<h2>').html('All Done!');
        var correctAnswers = $('<p>').html('Correct answers: ' + correct);
        var wrongAnswers = $('<p>').html('Incorrect answers: ' + incorrect);
        var notAnswered = $('<p>').html('Unanswered: ' + unanswered);
        var newDiv= $('<div class="col-lg-12 text-center" id="results">');
        newDiv.append(alldone);
        newDiv.append(correctAnswers);
        newDiv.append(wrongAnswers);
        newDiv.append(notAnswered);
        $('.summary').append(newDiv);
    }

    $('input[type=radio]').on("change", function() {
       correct =  $('input[value=correct]:checked').length;
       incorrect = $('input[value=incorrect]:checked').length;
       unanswered = (6-(correct + incorrect));
    });12
    
});