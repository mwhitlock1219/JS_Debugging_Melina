//Exercise 3
var woolOwners = 
[
  { "master": 1},
  {"dame": 1},
  {
	"little boy": 1,
	"location": "down the lane"
  }
];

var haveYouAnyWool = function() {
	for (var i = 0; i < woolOwners.length; i++) {
	var totalBags = totalBags + i;
	}
	return (i);
};

// Calling order MATTERS!
// Moved from above haveYouAnyWool to below
var bags = haveYouAnyWool();

function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
	if (bags > 0) {
		console.log("Yes sir, yes sir " + bags + " bags full.");
  }
}

function oneForMy() {
	for (var i = 0; i < 2; i++) {
		//must refer to [i] because of loop
		//people = Object.keys(woolOwners);
		people = Object.keys(woolOwners[i]); 
		var person = people.toString();
		console.log("One for my " + person + ',');
	}
}

baabaaBlackSheep();

oneForMy();

var boy = Object.keys(woolOwners[2]);

// refers to location of 'little boy'
//var littleBoy = boy[2];
var littleBoy = boy[0];

// location is found under woolOwners and it is the 3rd object
//var whereHeLives = littleBoy.location;
var whereHeLives = woolOwners[2].location;
console.log("One for the " + littleBoy + " that lives " + whereHeLives + '.');