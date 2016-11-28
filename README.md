# Algorithm - Array

## Table of contents
1. [Merge two array](#merge-two-array)
2. [Find min/max number in Array](#find-minmax-number-in-array)
3. [Finding missing number in Array](#finding-missing-number-in-array)
4. [Find two numbers that will sum up to a given number](#)
5. [Sorting array](#sorting-array)
6. [Sorting array of objects](#sorting-array-of-objects)
7. [Array - multiply](#array---multiply)
8. [Array - duplication](#array---duplication)
9. [Define Array.min(), Array.max() using prototype](#)
10. [Using reduce function](#using-reduce-function)




## Merge two array

**Method 1: Using `concat` function.**

```js
var a1 = [2,5,6,9];
var a2 = [1,2,3,29];
var result = a1.concat(a2);
console.log(result); //[ 2, 5, 6, 9, 1, 2, 3, 29 ]
```

**Method 2: Create new function to merge two array without duplicate value.**

```js
function mergeTwoArray(array1, array2){
	var output = array2;

	array1.forEach(function(value){
		if(output.indexOf(value) == -1 ){
			output.push(value);
		}
	});

	return output;
}
console.log(mergeTwoArray(a1, a2)); //[ 1, 2, 3, 29, 5, 6, 9 ]
```


**Method 3: Use `reduce` function.**

```js
var array3 = a1.concat(a2);
var output = array3.reduce(function(prev, current){
	if(prev.indexOf(current) == -1 ){
		prev.push(current);
	}
	return prev;
}, []);

console.log(output.sort()); //[ 1, 2, 29, 3, 5, 6, 9 ]
```


## Find min/max number in Array
```js
var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);
```


## Finding missing number in Array
1) Find max value. 2) Find min value. 3) Preparing missing[], 4) while loop, 5) Using indexOf() to search/find a missing value. 6) add a missing value in missing[].

```js
var array = [5, 2, 6, 1, 3];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

function findMissing(max, min, array){
	var i = min;
	var missing = [];

	while(i <= max){
		if(array.indexOf(i) == -1){
			missing.push(i);
		}
		i++;
	}
	return missing;
}
console.log(findMissing(max,min,array)); //[ 4 ]





### From a unsorted array, check whether there are any two numbers that will sum up to a given number?
```js
var array = [6,4,3,2,1,7];
var num = 9;

function findSumNum(array, num){
	var result = [];

	array.forEach(function(value, index){
		array.forEach(function(v, i){
//double loop
			if(value != v && (value+v) ==9){
				result.push(value);
			}
		});
	});

	return result;
}

console.log(findSumNum(array, 9));
```

### Sorting array
- arr.sort()
- arr.sort(compareFunction)

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
//[ 1, 2, 3, 4, 5 ]
```

### Sorting array of objects
```js
var info = 
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x-y;
    });
}

// Result
[
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
];
```

## Sorting array
- arr.sort()
- arr.sort(compareFunction)

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
//[ 1, 2, 3, 4, 5 ]
```

## Sorting array of objects
```js
var info = 
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x-y;
    });
}

// Result
[
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
];
```


## Array - multiply
**Using array.reduce().**

```js
var array = [3,5,2];
var multiply = array.reduce(function(a, b){
	return a*b;
});
console.log(multiply); //30
```


**Without using array.reduce().**

```js
var array = [3,5,2];

function multi(array){
	var sum = 1;
	array.forEach(function(value, index){
		sum = sum * value;
	});
	return sum;
}
console.log(multi(array)); //30
```


## Array - duplication
```js
var array = [1,2,3,4,5];

var newArray = array.concat(array);
console.log(newArray); //[ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]
```


## Using reduce function
```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}
var output = {};

names.forEach(function(value){
	if(output.hasOwnProperty(value)){
		output[value]++;
	}else{
		output[value] = 1;
	}
});

//console.log(output);

var countName = names.reduce(function(obj, current){
//console.log("Existing: " + obj.hasOwnProperty(current));

	if(obj.hasOwnProperty(current)){
		obj[current]++;
	}else{
		obj[current] = 1;
	}
	return obj;
}, {});

console.log(countName);
```

## Extending Object's methog using prototype - Array.min(), Array.max()
```js
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};



## References:
- [Mozilla Developer Network - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Mozilla Developer Network - Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)



