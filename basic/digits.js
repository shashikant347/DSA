write a fuction that return the count of digit in a number 


function  digitCount(n){
    let count = 0;
    if (n==0) return 1;
    //  n= Math.abs(n) it is change the negaive number to postive
    while(n !== 0){
         n = Math.floor(n/10)
         count ++
    }
    return count
}


console.log(digitCount(-0))
















// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 


// var reverse = function(x) {
//     let signe = false;

//     if (x < 0) {
//         signe = true;
//     }

//     x = Math.abs(x);

//     let revers = 0;

//     while (x > 0) {
//         let rem = x % 10;
//         revers = revers * 10 + rem;
//         x = Math.floor(x / 10);
//     }
//     if (signe) {
//         revers = -revers;
//     }
//     if (revers < -(2 ** 31) || revers > (2 ** 31 - 1)) {
//         return 0;
//     }
//     return revers;
// };


















// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// var isPalindrome = function(x) {
//     if (x < 0) return false;

//     let original = x;
//     let revers = 0;

//     while (x > 0) {
//         let rem = x % 10;
//         revers = (10 * revers) + rem;
//         x = Math.floor(x / 10);
//     }

//     return revers === original;
// };
