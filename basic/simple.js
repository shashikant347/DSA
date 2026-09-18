// reverse a string  wethout any method

// function checkreverse(str){
//     originalstr=str
//     newstr=''
//     for(i=str.length-1;i>=0;i--){
//         newstr += str[i]
//     }
    
//     return newstr

// }

// console.log(checkreverse("hello"))


// check if string is pelindrome or not

// function checkreverse(str){
//     newstr=''
//     for(i=str.length-1;i>=0;i--){
//         newstr += str[i]
//     }
    
//     return newstr===str

// }



// check number is palindrome



// function checkpalindrome(num){
// let oldnum=num
// let newnum=0

// while(num>0){
//     rem=num%10;
//     newnum=(newnum*10)+rem
//     num=Math.floor(num/10)
// }

// return newnum === oldnum;



// }

// checkpalindrome(1234)







// //  reverse intigar 




// function reverseInterger(num){
// let oldnum=num
// let newnum=0

// while(num>0){
//     rem=num%10;
//     newnum=(newnum*10)+rem
//     num=Math.floor(num/10)
// }

// console.log(newnum)



// }

// reverseInterger(1234)






//  check it is prime  number 


// function checkPrime(num){
//     let  flage = false;
//     for(let i=2;i<=num/2;i++){
//         if(num%i===0){
//             flage = true;
//             break;
//         }
//     }
//     return !flage;
// }


// console.log(checkPrime(4))


// print prime number in range 

// function rangePrime(start,end){
//     for(let i = start ;i<end;i++){
//         let flage = false;
//         for(let j=2;j<=i/2;j++){
//             if(i%j===0){
//                 flage = true;
//                 break
//             }
//         }

//         if( !flage && i>=2){
//             console.log(i)
//         }
//     }
// }

// rangePrime(2,34)




// //  find the factoria of numbeer 


//  function factoria(num){
//     let fac = 1;
//     for(let i=1;i<=num;i++){
//         fac *= i;

//     }
//     return fac; 

//  }

//  console.log(factoria(5))
 


// generate fabonacci serese ;

// function fibonacci(num){
//     let arr = [0,1]
//     for(let i=1;i<=num;i++){
//         arr.push(arr[i]+arr[i-1])
//     }
//     return arr
// }

// console.log(fibonacci(10))






// find a 4th fibonacci number same anser first 
// function nthFibonacci(num) {
//     let a = 0;
//     let b = 1;

//     for (let i = 2; i <= num; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }

//     return b;
// }

// console.log(nthFibonacci(4)); 











// check a number is armstong

// function armstrong(num){
//     let original = num;
//     let sum = 0;
//     while( num != 0){
//         let rem =  num%10;
//         sum += rem ** 3;
//         num = Math.floor(num/10)
//     }
//     return sum == original;

// }

// console.log(armstrong(123))





// check the perfect number 

// function perfectNum(num){

// let sum = 0;

// for(let i = 1;i<=num/2;i++){
//     if(num%i === 0){
//         sum += i;
//     }
// }

// return sum == num;

// }


// console.log(perfectNum(6))

 




// Find GCD of Two Numbers in JavaScript

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// console.log(gcd(48, 18)); // Output: 6



// find lcm of two number


// function lcm(a, b) {
//     let max = Math.max(a, b);

//     while (true) {
//         if (max % a === 0 && max % b === 0) {
//             return max;
//         }
//         max++;
//     }
// }

// console.log(lcm(12, 18)); // 36





// count digit in number 


// function countDigit(num){
//     let count = 0;
//     while(num >0){
//         num = Math.floor(num/10);
//         count ++
//     }
//     return count;

// }

// console.log(countDigit(348))








// sum of digit of number 

// function sumofDigit(num){
//     let sum = 0 ;
//     while(num>0){
//         let rem = num %10;
//         sum += rem;

//        num = Math.floor(num/10)

//     }

//     return sum

// }


// console.log(sumofDigit(345))





// reverse word in string  

// function reverseWord(str) {
//     let arr = str.split(" ");
//     let reverse = "";

//     for (let i = 0; i < arr.length; i++) {
//         reverse += arr[i].split("").reverse().join("") + " ";
//     }

//     console.log(reverse);
// }

// reverseWord("hello how are you");

// function reverseWord(str) {
//     let result = "";
//     let word = "";

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] !== " ") {
//             word = str[i] + word;
//         } else {
//             result += word + " ";
//             word = "";
//         }
//     }

//     result += word;

//     console.log(result);
// }    

// reverseWord("hello how are you");




// count  the vowel and consonants

// function countVowel(str){
//     let valueCount = 0;
//     let consonentCount = 0;
   
//     let value = "aeiou"
//      let s  = str.toLowerCase()

//     for( let i =0;i<s.length;i++){
//         if(value.includes(s[i])){
//             valueCount++
//         }else{
//             consonentCount++
//         }


//     }

//     return  {
//         valueCount,consonentCount
//     }
// }

// console.log(countVowel("shashi kant yadav"))







// count the  frequency of characters

// function frequencyOfCharacters(str){
//     let obj ={}

//     for(let i=0;i<str.length;i++){
//        if (obj[str[i]]) {
//             obj[str[i]]++;
//         } else {
//             obj[str[i]] = 1;
//         }
//     }
//     return obj
// }
 
// console.log(frequencyOfCharacters("shashi kant yadav"))



// find a dublicate caretor in string 

// function dublicateCarectorInString(str){
//       let obj ={}
//       for(let i=0;i<str.length;i++){
//         if(obj[str[i]]){
//             console.log(str[i])
//         }else{
//             obj[str[i]] = 1;
//         }
//       }
       
     
// }

// dublicateCarectorInString("shashi")







// function flattenArray(arr) {
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (Array.isArray(arr[i])) {
//             newArray = newArray.concat(flattenArray(arr[i]));
//         } else {
//             newArray.push(arr[i]);
//         }
//     }

//     return newArray;
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]], 6]));


// fletter the multilevel array








//  intersection of two array 

// function intersection(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }

//     return result;
// }

// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));


// function intersection(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 result.push(arr1[i]);
//             }
//         }
//     }

//     return result;
// }

// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));







// impliment map fuction 

// Array.prototype.myMap = function (callback) {
//     let result = []

//     for( let i=0;i<this.length;i++){
//         result.push(callback(this[i],i,this))
//     }

//     return result;
// }


// let arr = [2,3,4,4]
//   let result = arr.myMap((i)=>{
//     return i*2
// })

// console.log(result)