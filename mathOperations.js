/** We have to write four functions
 * 1) to add 2 arrays and provide the result in new array
 * 2) to subtract 2 arrays
 * 3) to multiply 2 arrays
 * 4) to divide 2 arrays
 */

// Declaring the arrays to perform operaions
let arr1 = [1];
let arr2 = [40];
let length1 = arr1.length;
let length2 = arr2.length;

/** This is a function to add 2 +ve arrays
 * @param {number[]} arr1 the first array
 * @param {number[]} arr2 the second array
 * @returns {number[]} result of the addition of two arrays
 * @throws {Error} if the provided arary is not valid
 */
function addArray(arr1, arr2) {
  //to handle the case where number should be integer 
  //and in between the digits 0 and 9
  for(let i = 0;i<=arr1.length-1;i++){
    if(!Number.isInteger(arr1[i]) || arr1[i]<0 || arr1[i]>9){
      throw new Error("enter a integer")
    }
  }
  for(let i = 0;i<=arr2.length-1;i++){
    if(!Number.isInteger(arr2[i]) && arr2[i]<0 && arr2[i]>9){
      throw new Error("enter a integer")
    }
  }
  // to handle empty array
  if(arr1.length===0){
    return arr2
  }
  else if(arr2.length===0){
    return arr1
  }
  else if(arr1.length===0 && arr2.length===0){
    throw new Error("provide value for 1 array atleast")
  }

  // to avoid negative values
  if(arr1[0]<0|| arr2[0]<0){
    throw new Error("provide positive number")
  }
  // for the ease of using ahead
  let ogLen1 = length1 - 1;
  let ogLen2 = length2 - 1;
  // declaring the result array
  let result = [];

  // the carry variable
  let carry = 0;
  // if the arr1.length is greater than arr2.length
  while (arr2.length < arr1.length) {
    arr2.unshift(0);
  }
  
  // if the arr2.length is greater than arr1.length
  while (arr1.length < arr2.length) {
    arr1.unshift(0);
  }
  // if the arr1.length is greater than arr2.length
  if(length1>length2){
    // while loop to iterate from the back till i reaches 0
    
    while (ogLen1 >= 0) {
      // the sum variable
      let sum = arr1[ogLen1] + arr2[ogLen1] + carry;
      result.unshift(sum % 10);
      
      carry = Math.floor(sum / 10);
      ogLen1--;
    }
    // if after the iteration is over there is some carry then add it
    if (carry > 0) {
      result.unshift(carry);
    }

    return result;
  }
  // if the arr2.length is greater than arr1.length
  else{
    // while loop to iterate from the back till i reaches 0
    while (ogLen2 >= 0) {
      // the sum variable
      let sum = arr1[ogLen2] + arr2[ogLen2] + carry;
      result.unshift(sum % 10);
      carry = Math.floor(sum / 10);
      ogLen2--;
    }
    // if after the iteration is over there is some carry then add it
    if (carry > 0) {
      result.unshift(carry);
    }

    return result;
  }
  
}
// console.log(addArray(arr1,arr2))

/** This is a fucntion to subtract 2 arrays
 * @param {number[]} arr1 the first array
 * @param {number[]} arr2 the second array
 * @returns {number[]} result of the subtraction of two arrays
 * @throws {Error} if the provided array is not valid
 */
function subsArray(arr1, arr2) {
  //to handle the case where number should be integer 
  //and in between the digits 0 and 9
  for(let i = 0;i<=arr1.length-1;i++){
    if(!Number.isInteger(arr1[i]) || arr1[i]<0 || arr1[i]>9){
      throw new Error("enter a integer")
    }
  }
  for(let i = 0;i<=arr2.length-1;i++){
    if(!Number.isInteger(arr2[i]) || arr2[i]<0 || arr2[i]>9){
      throw new Error("enter a integer")
    }
  }

  // to handle empty array
  if(arr1.length===0){
    return arr2
  }
  else if(arr2.length===0){
    return arr1
  }
  else if(arr1.length===0 && arr2.length===0){
    throw new Error("provide value for 1 array atleast")
  }
  // to avoid negative values
  if(arr1[0]<0|| arr2[0]<0){
    throw new Error("provide positive number")
  }
  // for the ease
  let trueLen1 = length1 - 1;
  let trueLen2 = length2 - 1;
  // array to store the result
  let subResult = [];
  let borrow = 0;

  // for checking which array is greater in terms of value
  let arr1Number = parseInt(arr1.join(""), 10);
  let arr2Number = parseInt(arr2.join(""), 10);

  // if the array 1 is smaller than array 2
  // then reverse the subtraction i.e subtract array 1 from array 2 and -ve
  if (trueLen1 < trueLen2 || arr1Number < arr2Number) {
    // if the arr2.length is greater than arr1.length
    if (trueLen1 < trueLen2) {
      for (let h = 0; h < trueLen2 - trueLen1; h++) {
        arr1.unshift(0);
      }
    }
    
    while (trueLen2 >= 0) {
      let diff
      // if we have borrowed something then subtract 1 from the arr1[i]
      if (borrow === 1) {
        arr2[trueLen2] = arr2[trueLen2] - borrow;
        borrow = 0;
      }
      // if the element in arr2 is less than the element in arr1
      // then borrow from previous
      if (arr2[trueLen2] < arr1[trueLen2]) {
        arr2[trueLen2] = arr2[trueLen2] + 10;
        borrow = 1;
         diff = arr2[trueLen2] - arr1[trueLen2];
        subResult.unshift(diff);
        trueLen2--;
      } else {
        let diff = arr2[trueLen2] - arr1[trueLen2];
        subResult.unshift(diff);
        trueLen2--;
      }
    }
    // Remove leading zeros from the result
    if(subResult[0]===0){
      subResult.shift()
    }
    // to give negative sign to first number
		subResult[0] = subResult[0]*-1

    return subResult;
  }
  // normal case where the array 1 is greater
  else {
    // if the arr1.length is greater than arr2.length
    if (trueLen1 > trueLen2) {
      for (let h = 0; h < trueLen1 - trueLen2; h++) {
        arr2.unshift(0);
      }
    }
    while (trueLen1 >= 0) {
      // if we have borrowed something then subtract 1 from the arr1[i]
      if (borrow === 1) {
        arr1[trueLen1] = arr1[trueLen1] - borrow;
        borrow = 0;
      }
      // if the element in arr1 is less than the element in arr2
      // then borrow from previous
      if (arr2[trueLen1] > arr1[trueLen1]) {
        arr1[trueLen1] = arr1[trueLen1] + 10;
        borrow = 1;
        let diff = arr1[trueLen1] - arr2[trueLen1];
        subResult.unshift(diff);
        trueLen1--;
      } else {
        let diff = arr1[trueLen1] - arr2[trueLen1];
        subResult.unshift(diff);
        trueLen1--;
      }
    }
    

        // Remove leading zeros from the result
        if(subResult[0]===0){
          subResult.shift()
        }
    return subResult;
  }
}
console.log(subsArray(arr1, arr2));

/** This is a funciton to multiply 2 arrays
 * @param {number[]} arr1 the first array
 * @param {number[]} arr2 the second array
 * @returns {number[]} the multiplication
 * @throws {Error} if the provided array is not valid
 */
function mulArray(arr1, arr2) {
  //to handle the case where number should be integer 
  for(let i = 0;i<=arr1.length-1;i++){
    if(!Number.isInteger(arr1[i])){
      throw new Error("enter a integer")
    }
  }
  for(let i = 0;i<=arr2.length-1;i++){
    if(!Number.isInteger(arr2[i])){
      throw new Error("enter a integer")
    }
  }
  // to handle empty array
  if(arr1.length===0){
    return arr2
  }
  else if(arr2.length===0){
    return arr1
  }
  else if(arr1.length===0 && arr2.length===0){
    throw new Error("provide value for 1 array atleast")
  }

  // to handle is one of the array is 0
  if((arr1.length===1 && arr1[0]===0) || (arr2.length===1 && arr2[0]===0)){
    return 0
  }

  // to handle the case where the element is negative
  let mark = 0
  if(arr1[0]<0 && arr2[0]<0){
    arr1[0] = -arr1[0]
    arr2[0] = -arr2[0]
    
  }
  else if(arr1[0]<0){
    arr1[0] = -arr1[0]
     mark = 1
  }
  else if(arr2[0]<0){
    arr2[0] = -arr2[0]
    mark = 1
  }
  
    // Initialize the result array with zeros
    let result = Array(arr1.length + arr2.length).fill(0);
  
    // Iterate through the digits of arr1
    for (let i = arr1.length - 1; i >= 0; i--) {
      // Iterate through the digits of arr2
      for (let j = arr2.length - 1; j >= 0; j--) {
        // Calculate the product
        let product = arr1[i] * arr2[j];
        let position = i + j + 1; // Position of the place in the result array
        let sum = result[position] + product; // Add the product to the current value at the position
        result[position] = sum % 10; // Update the ones place of the result
        result[position - 1] += Math.floor(sum / 10); // Carry over the tens place
      }
    }
    // to remove the leading zeros 
    if(result[0]===0){
      result.shift()
    }
    
    if(mark==1){

      result.unshift('-')
    }
    return result.join("")
  
}
// console.log(mulArray(arr1,arr2))



