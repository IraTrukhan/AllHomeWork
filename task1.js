// You have 2 arrays of integers. Return the total sum of all those integers.
function concatArrays(...arrays){
    let resultArray = [];
    for (let array of arrays) resultArray = resultArray.concat(array);
    return resultArray;
}

function sumArrays(...arrays){
    return  concatArrays(...arrays).reduce((sum, current) => sum + current, 0);}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 4, 22, 5];
const array3 = [11, 3];
alert(sumArrays(array1, array2, array3, array1, array2));