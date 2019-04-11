/*eslint-env browser*/

//STEP 1
//var name = window.prompt("What is your name?");
//window.alert("O my gosh! Your name has " + name.length + " characters!");

//STEP 2
//var name = window.prompt("What is your name?");
//var ind = window.prompt("Enter an index number between 1 and " + name.length);
//window.alert("The character at the " + ind + " index number of your name is "  + name.charAt(ind-1) + "!");

//STEP 3
//var firstName = window.prompt("What is your first name?");
//var lastName = window.prompt("What is your last name?");
//window.alert("Yay! Your name is " + firstName.concat(' ').concat(lastName) + "!");

//STEP 4
//var text = "The quick brown fox jumps over the lazy dog";
//window.alert(text.indexOf("fox"));

//STEP 5
//var text = "The quick brown fox jumps over the lazy fox";
//window.alert(text.lastIndexOf("fox"));

//STEP 6
//var text = "The quick brown fox jumps over the lazy dog!";
//var fullName = window.prompt("Enter your full name!");
//window.alert(text.replace("the lazy dog",fullName));

//STEP 7
//var text = "The quick brown fox jumps over the lazy dog";
//var wordSearch = window.prompt("Enter a word to be searched within my hidden string!");
//window.alert(text.indexOf(wordSearch));

//STEP 8
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.substr(-12);
//window.alert(new_string.toUpperCase());

//STEP 9
//var text = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ";
//window.alert(text.trim().toLowerCase());

//STEP 10
var text = "the quick brown fox jumps over the lazy dog.";
window.alert(text.charAt(0).toUpperCase() + text.slice(1));