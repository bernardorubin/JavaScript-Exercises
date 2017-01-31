// Question 3: Digit Product Sequence
// A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.
//
// For example:
//
// 1, 2, 4, 8, 16, 22, 26, 38, 62
// The above are the first 9 numbers of the sequence.
//
// Write a function, digitProduct, that takes a number, n, as an argument and calculates the nth number in the sequence.
//
// digitProduct(3) // returns 4
// digitProduct(6) // returns 22
// digitProduct(9) // returns 62
// Implement it iteratively
// Implement it recursively
// Benchmark the results



//Iterative-------------------------------------------------------------------//


function digitProduct(num) {
  let array = [1];
  while (array.length != num) {
    let lastNum = array[array.length - 1];

    if (lastNum < 10) {
      array.push(lastNum + lastNum);
    } else {
      let numToStr = lastNum.toString();
      let digit = numToStr.split('');
      let total = digit[0] * digit[1] + lastNum;
      array.push(total);
    }
  }
  return array[num - 1];
}

//Recursive-------------------------------------------------------------------//

function recursiveDigitProduct(num, array = [1]) {
  let outLength = array.length;
  let lastElement = array[array.length - 1]; // 1

  if (outLength === num) {
    return array[num - 1];
  } else if (lastElement < 10) {
    array.push(lastElement + lastElement);
    return recursiveDigitProduct(num, array);
  } else {
    let numToStr = lastElement.toString();
    let digit = numToStr.split('');
    let total = digit[0] * digit[1] + lastElement;
    array.push(total);
    return recursiveDigitProduct(num, array);
  }
}

//Benchmark-------------------------------------------------------------------//
console.time("digitProduct");
for(let i = 0; i < 10000000; i++) {
  digitProduct(8);
}
console.timeEnd("digitProduct");

console.time("recursiveDigitProduct");
for(let i = 0; i < 10000000; i++) {
  recursiveDigitProduct(8);
}
console.timeEnd("recursiveDigitProduct");
