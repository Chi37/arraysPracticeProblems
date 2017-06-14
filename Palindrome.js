"use strict";

//use while loop//

function Palindrome (input){
var arr=input.split();
var arrNorm =arr.join('');
var revArr=arr.reverse('').join('');

if(revArr===arrNorm) {
	myResult=Palindrom(input);
	console.log(myResult, "This is a Palidrome");
	return arr;
}

else {
	console.log ("this is not a Palindrome");
}
}