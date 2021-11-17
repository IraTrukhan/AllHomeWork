function addIndexToArray(arrayStrings){
    return arrayStrings.map((item, index) => item = `${++index}: ${item}`);
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(addIndexToArray(arr));
