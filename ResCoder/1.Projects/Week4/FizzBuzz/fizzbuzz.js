//Project Name: FizzBuzz
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston

///------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///------------------------------------------------///
// Print fizzbuzz for every number 1-100 that is divisible by 3 and 5
// Print fizz for every number 1-100 that is divisible by 3
// Print buzz for every number 1-100 divisible by 5
// If it's not divisible by 3 or 5, just print that numger
//
//I will need a loop function so it will count from 1-100
//I will need to have conditionals for the above four conditions
//I will need to print to console so I can see numbers and fizz+/buzz
//
///------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///------------------------------------------------///

var i=1

for(i=1;i<=100;i++){
	if(i%3===0 && i%5===0){
		console.log("FizzBuzz");
	}
	else if(i%3===0){
		console.log("Fizz");
	}
	else if (i%5===0) {
		console.log("Buzz");
	}
	else{
		console.log(i);
	}
}