var array = [2,5,6,9];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

console.log(max); //9
console.log(min); //2