var ordinalNumbers = ["First", "Second", "Third"];
var userInput = new Array();


for (i = 0; i < ordinalNumbers.length; i++) {
    userInput.push(+prompt("Enter " + ordinalNumbers[i] + " Number."));
}

/*
   Source for converting to numbers: 
   https://medium.com/@nikjohn/cast-to-number-in-javascript-using-the-unary-operator-f4ca67c792ce
   
*/


for (i = 0; i <userInput.length; i++){
    document.write('<p>' + ordinalNumbers[i] + " number: " + userInput[i] ,'</p>');
}


var max = Math.max(...userInput);
var min = Math.min(...userInput);

document.write('<p>' + "Maximum number: " , max ,'</p>');
document.write('<p>' + "Minimum number: " , min ,'</p>');
