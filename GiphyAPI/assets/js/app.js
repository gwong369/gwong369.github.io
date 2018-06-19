$(document).ready(function () {

    var searches = ["Minnesota", "Arctic Monkeys", "The Office", "Surfing", "Cats", "Dogs", "Will Smith", "Birds", "Backpack Kid", "Snowboard", "Fail"];

    function displayGifInfo() {

        // clearDiv();

        var search = $(this).attr("data-name");
        var searchType = '&random';
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + searchType + "&api_key=Yb1J2yNvJbuDFc4ONQ8od46mGVwNGSp3&limit=10";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                
                var gifDiv = $("<div class='gif'>");
                var rating = results[i].rating;
                var pOne = $("<p>").text("Rating: " + rating);
                // console.log(rating);

                gifDiv.append(pOne);

                var imgURL = results[i].images.fixed_height_downsampled.url;
                var image = $("<img>").attr("src", imgURL);

                gifDiv.append(image);

                $("#gif-results").prepend(gifDiv);
            }
        });
    }

    function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < searches.length; i++) {

            var a = $("<button>");

            a.addClass("gif-btn");

            a.attr("data-name", searches[i]);
            // Providing the initial button text
            a.text(searches[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var search = $("#gif-input").val().trim();

        // Adding movie from the textbox to our array
        searches.push(search);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

        // $('#gif-results').html("");
    });

    // Adding a click event listener to all elements with a class of "movie-btn"
    $(document).on("click", ".gif-btn", displayGifInfo);

    function clearDiv () {
        $('#gif-results').html("");
    };

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

}) 