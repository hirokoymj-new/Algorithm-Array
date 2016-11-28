# Algorithm - table of contents

## Array
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

## Object
11. [Merge two objects](#merge-two-objects)
12. [Merge three object](#merge-three-object)
13. [Grouping array of objects with name key](#grouping-array-of-objects-with-name-key)
14. [Grouping array of objects by skill key](#grouping-array-of-objects-by-skill-key)
15. [Comparing two objects](#comparing-two-objects)
16. [Convert Roman numeral](#convert-roman-numeral)


## Math
8. [Downward to the nearest integer](#downward-to-the-nearest-integer)
9. [Upward to the nearest integer](#upward-to-the-nearest-integer)
10. [Round the nearest integare](#round-the-nearest-integare)
17. [Is Integer?](#is-integer)
18. [Find a float](#find-a-float)
23. [Find Max number without using Math.max](#find-max-number-without-using-mathmax)
24. [Making Digit](#making-digit)
27. [Generate random int number from 5-7](#generate-random-int-number-from-5-7)

## Date
5. [Show tomorrow date](#show-tomorrow-date)
6. [Define Date.nextDay using prototype](#)

## String
18. [Reverse string](#reverse-string)
19. [Reverse sentence](#reverse-sentence)
20. [Reverse word](#reverse-word)

## Others
20. [fizzbuzz](#)
21. [commonItems](#)
22. [rotatedString](#)
23. [bigestProduct](#)
24. [this](#)
25. [use strict](#)


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





### Find min/max number in Array
```js
var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);
```

### Finding missing number in Array
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
```

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
### Show tomorrow date
```js
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
```
### Extending Object's methog using prototype - Date.nextDay()
```js
Date.prototype.nextDay = function(){
	var tomorrow = new Date();
	tomorrow.setDate(this.getDate()+1);
	return tomorrow;
};
```
### Extending Object's methog using prototype - Array.min(), Array.max()
```js
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
```
### Downward to the nearest integer
```js
Math.floor(1.6)	//1
```

### Upward to the nearest integer
```js
Math.ceil(1.4) //2
```

### Round the nearest integare
```js
Math.round(2.4); //2
Math.round(2.5); //3
```

### Merge two objects.
- Prepaing output empty array.
- Put two objects in data array.
- ForEach loop for data array.
- ForIn Loop for object.
- Using Object.hasOwnProperty(key), cheking if key exists or not.

```js
var a = { foo: true, count:1 };
var b = { bar: false };

function extend(a,b){
	var output = {};
	var array = [a, b];

	array.forEach(function(value){
		for(var key in value){
			if(!output.hasOwnProperty(key)){
				output[key] = value[key];
			}
		}
	});
	return output;
}

console.log(extend(a, b));//{ foo: true, count: 1, bar: false }
```


### Merge three object.
- Preparing ouput empty object.
- Add three objects in array.
- ForEach for array.
- ForIn loop for object.
- Using Object.hasOwnProperty(key), check if key exists in output array. if not existing add value into output, but before add convert strint go array.
- If exist, add value into output asssociated to key.

```js
var gdp = {
    "city": "LA",
    "gdp": [],  
};

var income = {
    "city": "LA",
    "income": [],  
};

var uRate = {
    "city": "SF",
    "uRate": [],  
};

var finalData = {
  "city": ["LA", "SF"],
  "gdp": [], 

};

function extend(a,b,c){
    var output = {};
    var array = [a, b, c];

    array.forEach(function(value){
        for(var key in value){
		var v = (typeof value[key] == 'string') ? [value[key]]: value[key];
		output[key] = v;
            }else{
              if(output[key] != value[key]){
                output[key].push(value[key]);
              }
            }
        }
    });
    return output;
}
console.log(extend(gdp, income, uRate));
```




### Grouping array of objects with name key.
```js
var array = [
	{name:"foo1",value:"val1"},
	{name:"foo1",value:["val2","val3"]},
	{name:"foo2",value:"val4"},
	{name:"foo3",value:"val5"},
];
/* 
[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
  { name: 'foo2', value: [ 'val4' ] },
  { name: 'foo3', value: [ 'val5' ] } ]
*/

var output = [];

array.forEach(function(value, index){
	var existing = checkExisting(output, value.name);
	var existingID = existing[1];

	if(!existing[0]){
		if( typeof value.value == 'string'){
			value.value = [value.value];
		}
		output.push(value);
	}else{
		output[existingID].value = output[existingID].value.concat(value.value);
	}

});

function checkExisting(array, value){
	var result = [false, 0];

	array.forEach(function(v, i){
		if(v.name == value){
			result[0] = true;
			result[1] = i;
		}
	});
	return result;
}

console.log(output);
```

### Grouping array of objects by skill key.
- 1) Define empty array for output. 2) forEach loop for data array. 3) Checking if skill key exists in output array.
```js
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
var employees = [
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];

function arrayGroupbySkill(array){
	var output = [];
	array.forEach(function(value){
		var existing = checkExisting(output, value.skill);
		var existingId = existing[1];

		if(!existing[0]){
			value.user = [value.user];
			value.count = value.user.length;
			output.push(value);
		}else{
			output[existingId].user.push(value.user);
			output[existingId].count = output[existingId].user.length;
		}
	});
	return output;
}

function checkExisting(array, skill){
	var existing = [false, 0];
	array.forEach(function(value, index){
		if(value.skill == skill){
			existing[0] = true;
			existing[1] = index;
		}
	});
	return existing;
}

console.log(arrayGroupbySkill(employees));
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


### Is Integer?
- Check if Interger or float in array.
- Check for a reminder when dividing by 1.

```js
var a = 2.1;
var b = 3;

function isInterger(a){
	var flag = true;

	if( (a%1)!==0 ){
		flag = false;
	}
	return flag;
}
console.log(isInterger(a)); // true
console.log(isInterger(b)); // false
```

### Reverse string

```js
var str = 'help';

function reverse(str){
	var array = str.split("");
	var tmp = [];
	var len = array.length; // When you use pop(), array length will change!!
	var count = 0;

	while(count < len){
		var last = array.pop();
		tmp.push(last);
		count++;

	}
	result = tmp.join('');
	return result;

}
var output = reverse(str);
console.log(output);
```

### Reverse sentence.
- Access from last to first using charAt().

```js
function reverseSen(str){
	
	var count = 1;
	var result = [];

	while(count <= str.length){
		var last = str.charAt(str.length-count);
		console.log(last);

		result.push();
		count++;
	}
	return result;

}

var result = reverseSen("I am the good boy");
console.log(result.join(''));
```
### Array - multiply
- Using array.reduce().
```js
var array = [3,5,2];
var multiply = array.reduce(function(a, b){
	return a*b;
});

console.log(multiply); //30
```

- Without using array.reduce().
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

### Array - duplication
```js
var array = [1,2,3,4,5];

var newArray = array.concat(array);
console.log(newArray); //[ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]

```

### Find a float
**Logic: When a float divided 1 and the remains are not 0.**

```js
var array = [3, 4.5, 2, 6.3];

function findFloat(array){
	var result = [];

	array.forEach(function(value, index){
		if((value%1) !== 0){
			result.push(value);
		}
	});

	return result;

}

var floatNum = findFloat(array);
console.log(floatNum);//[ 4.5, 6.3 ]

```

### Find Max number without using Math.max
```js
var array = [2,1,4,3];
function getMax(array){
	return array.sort().pop();
}
console.log(getMax(array)); //4
```

### Reverse word
- Logic: Using decrement(--) loop.
- console.log(str.charAt(3));
- console.log(str.charAt(2));
- console.log(str.charAt(1));
- console.log(str.charAt(0));

```js
var str = 'hellow world';
function reverse(str){
	var result = [];

	for(var i=str.length; i>0; i--){
		var tmp = str.charAt(i-1);
		result.push(tmp);
	}

	return result.join("");
}

var str1 = reverse(str);
console.log(str1);
```



### Find not duplicate number in Array
*Not using filter()*
```js
var a = [5,2,3,2,5];

function findUnique(array){
	var output = [];
	array.forEach(function(value){
		var count = 0;
		for(var i=0; i<array.length; i++){
			if(value == array[i]){
				count++;
			}
		}

		if(count == 1){
			output.push(value);
		}


	});
	return output;
}
console.log(findUnique(a)); //[3]
```
*Usiing filter
```js
var a = [1,2,2,3,4,4,5,5,6];

uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) != pos;
});

console.log(uniqueArray);
```



### Making Digit
```js
function findDigit(num, nth){
	var result;

	if(num < 0){
		num = num * -1;
	}
	if(nth < 0){
		result = -1;
		return result;
	}

	var digit = makeDigit(nth);
	digit = digit + num;
	//console.log(digit);

	var array = digit.toString().split('');
	console.log(array);
	array.shift();
	var str = array.join('');
	console.log(str);

	return str;

}

console.log(findDigit(-43,5)); //00043


function makeDigit(nth){
	var sum = 1;
	for(var i=0; i<nth; i++){
		sum = sum * 10;
	}
	return sum;
}

function makeDigit2(nth){
	return Math.pow(10, nth);
}

console.log(makeDigit2(7));
```

### Generate random int number from 5-7.
```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
```
console.log(getRandomInt(5,8));//5,6,7


## Comparing two objects
Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory.

```js
var a = {a: 1};
var b = {a: 1};
//a == b // false  
//a === b  //false
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


## Convert Roman numeral
```js
var RomanObj = {
	1:'I',
	4:'IV',
	5:'V',
	9:'IX',
	10:'X',
	40:'XL',
	50:'L',
	90:'XC',
	100:'C',
	400:'CD',
	500:'D',
	900:'CM',
	1000:'M'
};

function convertRoman(num){
	var tmp = [];
	var result = [];

	while(num>0){ 
		for(var key in RomanObj){
			if(num>=key){
				tmp.push(key);
			}
		}

		var keyNum = tmp.pop();
		num = num-keyNum;

//		console.log("keyNum:" + keyNum + " num: " + num);
		result.push(RomanObj[keyNum]);
	}
	return result.join('');
}

console.log(convertRoman(66)); //[50,10,5,1] => LXVI
console.log(convertRoman(50)); //[50] => L
console.log(convertRoman(25)); //[10,10,5] => XXV

```


## References:
- http://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
- http://www.thatjsdude.com/interview/js2.html
- https://www.interviewcake.com/javascript-interview-questions
- http://www.thatjsdude.com/interview/js1.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
