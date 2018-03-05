									//----////----////----//
									/////*PSEUDO CODE**/////
									//----////----////----//

//--What can the player do, expect, and see???--//


//--Parameters are there when you declare functions!!! --//
//--Arguments are when you're calling--//

//--Three Event listeners for the three buttons listening for those clicks. They will fire three functions.--//
//--Functions need to generate actions for choices, and function needs to generate random choice for computer--//
//--A function for comparing the choices and choose a winner--//
//--Another function for displaying the result and updating the score--//



// function getRandomWeapon(){
// 	var randomNumber =Math.random();
// 	var botsWeapon="rock";
// 	if(randomNumber<.33){
// 		botsWeapon="scissors";
// 	}
// }



//////////////////////////


var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	if (botsWeapon="paper" || botsWeapon="Spock");
		{computerScore++;
		}
		else {
			playerScore++;
		}
		return{ computerScore && playerScore;
}
function playerThrowsScissors(){
	if (botsWeapon="rock" || botsWeapon="Spock")
		{computerScore++;
		}
		else {
			playerScore++;
		}
		return{ computerScore && playerScore;
}
function playerThrowsPaper(){
	if (botsWeapon="scissors" || botsWeapon="lizard");
		{computerScore++;
		}
		else {
			playerScore++;
		}
		return{ computerScore && playerScore;
}
function playerThrowsLizard(){
	if (botsWeapon="rock" || botsWeapon="scissors");
		{computerScore++;
		}
		else {
			playerScore++;
		}
		return{ computerScore && playerScore;
}
function playerThrowsSpock(){
	if (botsWeapon="lizard" || botsWeapon="paper");
		{computerScore++;
		}
		else {
			playerScore++;
		}
		return{ computerScore && playerScore;
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<=.20){
		botsWeapon="scissors";
	}
	else if(.20<randomNumber<=.40){
		botsWeapon="paper";
	}
	else if (.40<randomNumber<=.60) {
		botsWeapon="lizard";
	}
	else if (.60<randomNumber<=.80) {
		botsWeapon="Spock";
	}
	else {botsWeapon="rock"
}
	return botsWeapon;
}
/*/////////////////////////////////////////////////////////
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
////////////////////////////////////////////////////////////*/
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore++
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}