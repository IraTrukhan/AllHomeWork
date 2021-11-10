// Given an array of strings, 
// return that array but add a ‘!’ symbol at the end of each string.

function addSymbolToArray(arrayStrings, symbol){
    return arrayStrings.map(item => item += symbol);
}

let arr = ['Яблуко', 'Банан', 'Груша'];
let symbol = prompt('Symbol:', '!');
addSymbolToArray(arr,symbol).forEach(alert);

