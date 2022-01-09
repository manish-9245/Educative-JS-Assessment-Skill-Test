//Logical Operators in Javascript: Assess your skills
//****************************************
//Assess your knowledge of Logical operators in Javascript by implementing the following functions.
//----------------------------------------
//Test 1: Work with logical ‘or’
or = function(a, b) {
    return a||b;
    }
//-----------------------------------------
//Test 2: Work with logical ‘and’
and = function(a, b) {
    return a&&b;
    }

//Fizzbuzz: Test your Flow control skills in Javascript
//******************************************
//Assess your knowledge of flow control in Javascript by implementing the following functions.
//Test 1: Conditionally branch your code
fizzBuzz = function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
  if(isNaN(num)==false){
  if (num % 15 === 0 )   //if number is divisible by 5 or 3 prints FizzBuzz
      return 'fizzbuzz';
  else if (num % 5 === 0) //if number is divisible by 5 prints Buzz
      return 'buzz';
  else if (num % 3 === 0 ) //if number is divisible by 3 prints Fizz
      return 'fizz';
  else 
    return num;
  }
  return false;
  
  }
//------------------------------------------------
//Arrays in Javascript: Assess your skills
//*****************************************
//Assess your knowledge of Arrays in Javascript by implementing the following functions.
//Test 1: Determine the location of an item in an array
indexOf = function(arr, item) {
    return arr.indexOf(item, 0);
}
//--------------------------------------------
//Test 2: Add the values of an array
sum = function(arr) {
    var sum=0;
  for(var i=0;i<arr.length;i++)
    sum+=arr[i];
return sum;
}
//----------------------------------------------
//Test 3: Return a new array after removing all instances of a value from an array
// Returns a new array
remove = function(arr, item) {
    var s=new Array();
  for (var i = 0; i<arr.length;i++ )
    {
        if (arr[i] == item) {
            delete arr[i];
        }
        else
            s.push(arr[i]);
    }
    
    return s;

}
//-------------------------------------------------
//Test 4: Remove all instances of a value from an array (modify original array)
// Modifies the original array
removeWithoutCopy = function(arr, item) {
    for (var i = 0; i<arr.length;i++ )
    {
        if (arr[i] == item) {
            arr.splice(i,1);
        }
        
    }
    return arr;
}
//-------------------------------------------------
//Test 5: Add an item to the end of an array
// Appends to the original array
append = function(arr, item) {
    arr.push(item);
  }
//-------------------------------------------------
//Test 6: Remove the last item of an array
// Modifies the original array
truncate = function(arr) {
    arr.pop();
  }
//-------------------------------------------------
//Test 7: Add an item to the beginning of an array
// Prepends to the original array
prepend = function(arr, item) {
    arr.unshift(item);
  }
//-------------------------------------------------
//Test 8: Remove the first item of an array
// Modifies the original array
curtail = function(arr) {
    arr.shift();
  }
//-------------------------------------------------
//Test 9: Join together two arrays
// Returns a new array containg both arrays
concat = function(arr1, arr2) {
    return arr1.concat(arr2);
  }
//-------------------------------------------------
//Test 10: Add an item anywhere in an array
// Inserts an element in the original array
insert = function(arr, item, index) {
    arr.splice(index, 0, item);
  console.log(arr.join());
  }
//-------------------------------------------------
//Test 11: Count the occurrences of an item in an array
count = function(arr, item) {
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    return countOccurrences(arr,item);
  }
//-------------------------------------------------
//Test 12: Find duplicates in an array
// return all elements that occur more than once
duplicates = function(arr) {
    arr.sort();
    const s=new Array();
    for(var i=0;i<arr.length-1;i++){
        var count=0;
        if(arr[i]==arr[i+1])
         count+=1;
     if(count==1)
         s.push(arr[i]);
    }
 
    return [...new Set(s)];
 }
//-------------------------------------------------
//Test 13: Square each number in an array
// return a new array with each item squared
square = function(arr) {
    for(let i=0;i<arr.length;i++)
      arr[i]=arr[i]*arr[i];
  return arr;
  }
//-------------------------------------------------
// Test 14: Find all occurrences of an item in an array
findAllOccurrences = function(arr, target) {
    var s=new Array();
        for(let i=0;i<arr.length;i++){
            if(arr[i]==target)
                s.push(i);
        }
        return s;
    }
//--------------------------------------------------
//Strings in Javascript: Assess you skills
//****************************************
//Assess your knowledge of Strings in Javascript by implementing the following functions.
//--------------------------------------------------
//Test 1: Reduce duplicate characters to the desired minimum
reduceString = function(str, amount) {
    var count = 0;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    } 
  };
  return result;
}
//--------------------------------------------------
//Test 2: Wrap lines at a given number of columns, without breaking words
wordWrap = function(str, cols) {
    var formatedString = '',
        wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }
    return formatedString;
}
//---------------------------------------------------
//Test 3: Reverse a string
reverseString = function(str) {
    return str.split("").reverse().join("");
 }