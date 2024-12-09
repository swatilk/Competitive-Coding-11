// Time Complexity : O(n)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    //Use stack to store all numbers only
    let stack = [];

    for(let token of tokens) {
        // for each token in input array, check if it is not a NaN (Not a number)
        if(!isNaN(token)) {
            //Push the number to stack after converting string to Integer using Number
            stack.push(Number(token));
        }
        else {
            // If its not a number, we encountered an operator, pop top 2 numbers, since this is stack we need to maintain order by assigning first popped
            // to second variable and second popped to first
            let popped2 = stack.pop();
            let popped1 = stack.pop();
            let result;
            //Handle condition for each operator
            switch(token){
                case '+':
                    result = popped1 + popped2;
                    break;
                case('-'):
                    result = popped1 - popped2;
                    break;
                case '*':
                    result = popped1 * popped2;
                    break;
                case '/':
                    //For division, use trunc method to remove the decimal part
                    result = Math.trunc(popped1 / popped2);
                    break;
            }

            // push the result back to stack to use as one of the operands next
            stack.push(result);
        }
    }
    //final result will be stored in the stack so pop it
    return stack.pop();
};