// squre star

// function  squreStar(n){
//     let stars = ""
//     for(let i=0;i<n;i++){
//         for(let  j=0;j<n;j++){
//             stars += " *"

//         }
//         console.log(stars)
//         stars =""
//     }

// }

// squreStar(5);

// trigal star

// function trigalStar(n){
//     let star =""
//     for(let i=0;i<n;i++){
//         for(let j=0;j<i;j++){
//           star += " *"

//         }
//         console.log(star)
//         star =""
//     }
// }

// trigalStar(5)

// digits star

// function digitStar(n){
//     let digit = ""
//     for(let i=0;i<n; i++){
//         for(let j=1;j<i;j++){
//             digit += j +" "
//         }
//         console.log(digit)
//         digit =""
//     }

// }

// digitStar(7)

// digits star 2

// function digitStar2(n){
//     let digit = ""
//     for(let i=0;i<n; i++){
//         for(let j=0;j<i;j++){
//             digit += i +" "
//         }
//         console.log(digit)
//         digit =""
//     }

// }

// digitStar2(10)

// digits star 3

// function digitStar3(n){
//     let digit = ""
//     for(let i=n;i>0; i--){
//         for(let j=1;j<=i;j++){
//             digit += j +" "
//         }
//         console.log(digit)
//         digit =""
//     }

// }

// digitStar3(5)

// space with start

// function spaceWithStar(n) {
//     for (let i = n; i > 0; i--) {
//         let star = "";

//         for (let j = 0; j < i - 1; j++) {
//             star += " ";
//         }

//         for (let k = 0; k < n - i + 1; k++) {
//             star += "*";
//         }

//         console.log(star);
//     }
// }

// spaceWithStar(7);

// 101 pettern

// function pettern101(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     let switchs = 1;
//     for (let j = 0; j <= i; j++) {
//       row = row + switchs;
//       if (switchs === 0) {
//         switchs = 1;
//       } else {
//         switchs = 0;
//       }
//     }
//     console.log(row);
//     row = "";
//   }
// }

// pettern101(6);





// // Square Pattern
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < n; j++) {
//         row += "*";
//     }

//     console.log(row);
// }


// Right Triangle
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }














// . Inverted Right Triangle
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < n - i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }







// Number Triangle

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }

//     console.log(row);
// }



// Same Number Triangle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += i;
//     }

//     console.log(row);
// }



// // Alphabet Triangle
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j <= i; j++) {
//         row += String.fromCharCode(65 + j);
//     }

//     console.log(row);
// }







// Inverted Number Triangle
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }

//     console.log(row);
// }








// Continuous Number Triangle

// let n = 4;
// let num = 1;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += num;
//         num++;
//     }

//     console.log(row);
// }


// Pyramid

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }

//     console.log(row);
// }





// Inverted Pyramid

// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }

//     console.log(row);
// }



// 








// Hollow Square
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < n; j++) {

//         if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }

//     }

//     console.log(row);
// }







// // Hollow Right Triangle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {

//         if (j === 1 || j === i || i === n) {
//             row += "*";
//         } else {
//             row += " ";
//         }

//     }

//     console.log(row);
// }