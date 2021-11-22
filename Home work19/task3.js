function sortAsc(a, b){
    return function(a, b) {
        return a - b;
    }
}
function sortDesc(){
    return function(a, b) {
        return b - a;
    }
}
Array.prototype.sortReloaded = function (dir = 'asc') {
    let returnArray = [...this];
    if (dir.toLowerCase() === 'asc'){
        return returnArray.sort(sortAsc())
    }
    else if (dir.toLowerCase() === 'desc'){
        return returnArray.sort(sortDesc())
    }
    else
    return false;
 };

let array1 = [1,5,76,54,2];
let array2 = array1.sortReloaded('asc');
console.log(array1.sortReloaded('desC'));
console.log(array1.sortReloaded());
console.log(array1.sortReloaded(''));
console.log(array2);
console.log(array1);