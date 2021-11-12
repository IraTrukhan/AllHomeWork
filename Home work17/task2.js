 function Dictionary() {
    this.arrayWords = []; 
  }

Dictionary.prototype.addWord = function (...word) {
    this.arrayWords.push(...word);
 };

Dictionary.prototype.search = function (word) {
    let reg = new RegExp('^'+word+'$');
    return Boolean(this.arrayWords.find(el => reg.test(el)));
 };

let vocabalary = new Dictionary();
console.log(vocabalary);
vocabalary.addWord('one', 'two', 'three');

console.log(vocabalary.search('th.'));