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
9. [Find not duplicate number in Array](#find-not-duplicate-number-in-array)
10. [Define Array.min(), Array.max() using prototype](#)
11. [Using reduce function](#using-reduce-function)




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



## References:
- [Mozilla Developer Network - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Mozilla Developer Network - Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)



