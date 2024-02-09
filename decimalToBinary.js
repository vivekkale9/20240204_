/* write functions which are as follows
 * 1) write a function to get 2s complement of a decimal number 
 * 2) write a function to reverse the above function
 * 3)
 * 4)
 */

/** This is a function to convert decimal to binary
 * @param {Number} decimal the decimal number you want to convert into binary
 * @returns {number[]} an array of the binary representation
 * @throws {Error} if the input is not an Integer
 */
function decimalToBinary(decimal){
    // Condition to check if the input is a valid number
    if (!Number.isInteger(decimal)) {
        throw new Error("Enter a valid Integer")
    }
    // If the number is 0 then return 0
    if(decimal === 0){
        return [0];
    }
    let binaryArray = []
    let remainder = 0
    while(decimal>0){
        remainder = decimal%2
        binaryArray.unshift(remainder)
        
        decimal = Math.floor(decimal/2)
    }
    // now we have to reverse the remainders to get binary representation
    let reverseArray = binaryArray.reverse()
    return binaryArray
}

/** Function to provide the 2s complement
 * @param {Number} Number the number that you want to perform 2s complement
 * @param {Number} Numlen the number of bits you want
 * @returns {number[]} an array of 2s complement
 * @throws {Error} if the number length is less than 11 or greater than 52
 */
function getSimple2sComplement(Number,Numlen){
    // if the number is positive simple return the binary conversion
    if(Number>0){
        let numBinary = decimalToBinary(Number)
        // if the number length is invalid return invalid input
        if(Numlen<11 || Numlen>52){
            throw new Error("Invalid length")
        }
        for(let i=1;i<=Numlen;i++){
            numBinary.unshift(0)
        }
        // To add the first signed bit
        numBinary.unshift(0)
        return numBinary
    }
    else if(Number===0){
        throw new Error("it is 0")
    }
    // if the number is a negative number perform the 2s complement
    else{
        Number = Number * -1
        let negNumBinary = decimalToBinary(Number)
        // if the number length is invalid return invalid input
        if(Numlen<11 || Numlen>52){
            throw new Error("Invalid length")
        }
        for(let i=1;i<=Numlen;i++){
            negNumBinary.unshift(0)
        }
        // To add the first signed bit
        negNumBinary.unshift(1)
        for (let i = 0; i < negNumBinary.length; i++) {
            negNumBinary[i] = negNumBinary[i] ^ 1;
        }
        let carry = 1;
        for (let i =negNumBinary.length - 1; i >= 0; i--) {
            let sum = negNumBinary[i] + carry;
            negNumBinary[i] = sum % 2;
            carry = Math.floor(sum / 2);
        }
        // If there is a carry after the loop, add a new bit
        if (carry > 0) {
            negNumBinary.unshift(carry);
        }
        return negNumBinary
    }
}
// console.log(getSimple2sComplement(-12,11));

/** This is function to give decimal from 2s complement
 * @param {number[]} twosComplement the 2s complement which you want to convert
 * @returns {Number} a decimal conversion of the 2s complement
 * @throws {Error} if the 2s complement have values other than 0 and 1
 */
function getSimpleDecimal(twosComplement){

    // to check if the input is an integer
    // to check if the input contains only 0s and 1s
    for(let i=0;i<=twosComplement-1;i++){
        if(twosComplement[i]!==0 || twosComplement[i]!==1 || !Number.isInteger(twosComplement[i])){
            throw new Error("Enter a valid 2s complement")
        }
    }
    //power variable to add to binary
    let power = 0
    
    let sum = 0
    let superScript = 0
    // If the first element is 0 then the decimal conversion is +ve
    if(twosComplement[0]===0){
        for(let i=twosComplement.length-1;i>=1;i--){
            power = Math.pow(2,superScript)
            multiple = twosComplement[i] * power
            sum = sum + multiple
            superScript++
        }
        return sum
    }
    // If the first element is 1 then the decimal conversion is -ve
    else{

        sum = sum*-1
        return sum
    }
}
let arr = [0,0,0,0,0,0,0,1,1]
console.log(getSimpleDecimal(arr));
console.log(8^1);

