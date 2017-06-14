"use strict"

// Reverse a string
// Write a function that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”//

ANSWER TO PROBLEM #2:
var str="hello";
var res=str.split("");
res.reverse("");
var olleh =res.join("");
console.log (olleh);


3.    Capitalize letter//

	space add b/t "" bc computer is
	looking for the space to split

ANSWER TO PROBLEM #3
function capitalLetter (str) {
	var i=0;
	var arr = str.split(" ");


for (var i=0; i < arr.length; i++) {

	arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

return  arr.join(" ");
	
}
var Myresult = capitalLetter ("hello world i finally did it");
console.log(Myresult);


// function CapsWord (str) {
// 	var index = 0
// 	var wrds =str.split 


// 	for (i=0; i<words.length; i++) {
// 		if (words[i]===0){
// 		[i].toUpperCase;}

// 		else {
// 			var wrds=str.split;
			

// 		}
// 	}

// 	return words;
// 	 var myResult=CapsWord();
// console.log (CapsWord);
// }

// // function words (str) {
// 	str.split;


// }
// var myResult = CapsWord("take stirng and break it up");
// console.log (myResult);
