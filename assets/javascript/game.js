
$(document).ready( function () {

var imageValues;
// randomized between 19-120
var targetValue= 19 + Math.floor(Math.random() * 101);

var images = ["assets/images/Pikachu.png","assets/images/Charmander.png", "assets/images/Bulbasaur.png", "assets/images/Squirtle.png"]

var result = 0;
var wins = 0;
var loss = 0;

// wrap image attribute delagate for loop, into a function to reset
function startup(){
// give images a value attribute
for (var i=0; i<4; i++) {

// takes out previous values
	$(".pokemon").empty();

	var imageValues = 1 + Math.floor(Math.random() * 11);

	var pokemon = $("<div>");
	pokemon.attr({"class": "pokemon", "image-data": imageValues});
	pokemon.css({"background-image": "url("+images[i]+")",
		"background-size": "100% 100%", "background-position": "center"})
	$(".pokemonz").append(pokemon);
}
// resets score 
	$("#score").html("Total: " + result);
	$("#targetNumber").html("Target Number:" + targetValue);

};



startup();

// on click attributes
$(document).on("click", ".pokemon", function adding() {
// on click adds numbers associated with images
	var number = parseInt($(this).attr("image-data"));
	console.log(number);
// not registering result as a number? it's declared as a global as integer?
	result = result + number;
	$("#score").text("Total: " + result);

// if statement on if it reaches target number

	if (result > targetValue) {
		alert("Sorry, you're not a Pokemon master. YOU LOSE!");
		loss++;
		$("#lose").html("Losses: " + loss);
// resets addition variable and restarts game
		result = 0;
		$(".pokemonz").empty();
		startup();
	}

	else if (result === targetValue) {
		alert("Congrats, you're good at math and like Pokemon...YOU WIN!");
		wins++;
		$("#win").html("Wins: " + wins);
// resets addition variable and restarts game
		result = 0;
		$(".pokemonz").empty();
		startup();

	}


;});

});