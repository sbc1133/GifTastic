


// Global Animals


var animal;

//TODO: save the text from form field in a variable animal

//TODO: create button dynamicaaly and set its data-attr to animal name

$("#animal-btn").on("click", function () {
    animal = $("#add-animal").val();
    console.log(animal);
    var newAnimalButton = $("<button>");
    //newAnimalButton.addClass("mr-2 p-2 btn btn-primary");
    newAnimalButton.addClass("animalButton");
    //newAnimalButton.attr("id", "animalButton");
    // newAnimalButton.attr("type", "button");
    newAnimalButton.attr("data-animal", animal);
    newAnimalButton.text(animal);
    $("#button-container").append(newAnimalButton);
    $("#add-animal").val('');
    //console.log(newAnimalButton.attr("data-animal"))
});

function renderGifCard(title, imageurl) {
    var cardDiv = $("<div>").addClass("card");
    var image = $("<img>").addClass("card-image-top").attr({id:"gif-image",src:imageurl});
    var cardBody = $("<div>").addClass("card-body");
    var title = $("<h5>").addClass("card-title").text(title);
    cardBody.append(title);
    cardDiv.append(image);
    cardDiv.append(cardBody);
    $("#gif-here").prepend(cardDiv);
}

//TODO: click on new button

$(document).ready(function () {

    $(document).on("click", ".animalButton", function () {
        // Do something when button is clicked

        console.log("i got clicked");
        var searchAnimal = $(this).attr("data-animal");
        console.log(searchAnimal);
        var limit = 10;
        var apiKey = "KBvWdHATrN16X1SpNvf3Ms1Ulqnknk6k";
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchAnimal + "&limit=" + limit + "&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
            console.log(results)

            for (var i = 0; i < results.length; i++) {
               
                renderGifCard(results[i].title,results[i].images.fixed_height.url)
            }
        });
    });
});



