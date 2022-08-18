//Determine the time complexities for each of the following functions. 
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
//Time Complexity : O(n) - Linear Time because the number of operations increases
// linearly with the input size since there is a loop.

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
//Time Complexity: O(n) - Linear Time because the number of operations increases
// linearly with the input size since there is a loop.

function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }

//Time Complexity: O(1) - Constant Time because the number of operations is
// constant regardless of the input size.

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

//TimeComplexity : O(n) - Linear Time because the number of operations increases
// linearly with the input size.


function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
//Time Complexity : O(n^2) - Quadratic Time because the number of operations
// increases exponentially with the input size.


function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }

//Time Complexity : O(n) 