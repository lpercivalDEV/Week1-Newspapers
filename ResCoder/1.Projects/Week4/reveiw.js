						//----////----////----//
						///*JAVASCRIPT REVIEW*///
						//----////----////----//

///*Variables*///
var zebra =0; //--You DECLARE a variable and then you ASSIGN it a value--//

//----//


///*Conditionals*///
if(zebra< = 5){ //--An action that is performed once all conditions are met--//
	hi();
}

//----//

///*Functions*///
function hi(){  //--An action or steps of action--//
	alert("Hi") //--You can DECLARE a function into memory and then CALL it at a later time--//
				//--Here you are declaring a function called 'hi' and then calling a method called 'alert'--//
				//--Function declarations HOIST and will 'float to the top' of the order--//
}		

var jump=function(){
	console.log("Feeling froggy?") //--Here is a function expression. You're declaring a variable jump, and assigning it an anonymous function--//
								   //--Function expressions DO NOT HOIST and so order does matter--//
}


//----//


///*Loops*///
for(var i=0;i<=5;i++){  //--A way of repeating actions--//
	console.log(i)		//--All conditions must be TRUE in the loop or it will not run--//
}						//--The variables that are locally scoped (in this case "i" do not exist once the loop finishes its run--//


//----//

document.getElementById("bob").onclick= yell

function yell(){
	alert("AHHAHAHHAH")
}

function yell(){
	documet.getElementById("bob").innerHTML =
	
}



//----//
//----//
//----//