// Given an array of strings, 
// return that array but add a ‘!’ symbol at the end of each string.

function addExclamationPoint(arrayStrings){
    return arrayStrings.map(item => item += '!');
}

let arr = ['Яблуко', 'Банан', 'Груша'];
addExclamationPoint(arr).forEach(alert);

