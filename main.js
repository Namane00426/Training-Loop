// input text we use
let input = 'a whale of a deal!!';

// set array of vowels excluding y.
const vowels = ['a', 'e', 'i', 'o', 'u'];

//  set result array whitch is empty.
let resultArray = [];

// set for loop to check the text 
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input.toLowerCase()[i] === vowels[j]) {
    resultArray.push(vowels[j]);
      }
    }
    if ( input[i] === 'e' || input[i] === 'u'){
      resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());