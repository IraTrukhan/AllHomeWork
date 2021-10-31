// You have 2 arrays of integers. Return the total sum of all those integers.
function sumArrays(array1, array2){
    return  array1.reduce((sum, current) => sum + current) + 
        array2.reduce((sum, current) => sum + current);   
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 4, 22, 5];
alert(sumArrays(array1, array2));