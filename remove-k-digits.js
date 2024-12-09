// Time Complexity : O(n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {

    //Use stack to store all the digits
    let stack = [];

    for(let digit of num) {
        //for each digit in the input, check if the incoming digit is smaller than the one in the stack, if so pop the stack since we only need to keep smaller digits in the stack
        while(stack.length > 0 && k > 0 && stack[stack.length-1] > digit) {
            stack.pop();
            //decrement k as we pop the stack
            k--;
        }
        //if the incoming digit is smaller or there are remaining digits in the input then push them to stack
        stack.push(digit);
    }

    // If there are any more k left, pop stack and decrement
    while(k > 0) {
        stack.pop();
        k--;
    }

    // Stack now contains the result, its in an array to convert to string and remove leading zeros
    let result = stack.join("").replace(/^0+/, "");

    // If result is empty string return "0" else return the result
    return result === "" ? "0" : result;
};
