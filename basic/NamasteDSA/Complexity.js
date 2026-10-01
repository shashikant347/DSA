


// Time complexity 

// Time Complexity tells us how the running time of an algorithm grows when the input size (n) increases.
// We use Big-O notation to represent it.


// 2. Common Time Complexities
// Complexity	Name	Example
// O(1)	Constant	arr[0]
// O(log n)	Logarithmic	Binary Search
// O(n)	Linear	Single loop
// O(n log n)	Linearithmic	Merge Sort
// O(n²)	Quadratic	Nested loops
// O(2ⁿ)	Exponential	Some recursive problems
// O(n!)	Factorial	Permutations




// 3. O(1) — Constant
// let x = arr[0];

// Input कितना भी बड़ा हो, operation लगभग same रहेगा.

// Time = O(1)

// 4. O(n) — Linear
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

// Loop n times चलेगा.

// Time = O(n)

// 5. O(n²) — Quadratic
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         console.log(i, j);
//     }
// }

// n × n = n²

// Time = O(n²)

// 6. O(log n)

// हर step में input आधा हो जाता है.

// Example: Binary Search

// 100
//  ↓ half
// 50
//  ↓ half
// 25
//  ↓ half
// 12
//  ↓ half
// 6

// Time = O(log n)

// 7. Important Rules

// Rule 1: Consecutive loops → Add

// for (...) {} // O(n)

// for (...) {} // O(n)

// O(n) + O(n) = O(2n)

// Constants remove:

// O(n)

// Rule 2: Nested loops → Multiply

// for (...) {
//     for (...) {
//     }
// }

// O(n) × O(n) = O(n²)

// Rule 3: Ignore constants

// O(2n) → O(n)
// O(5n) → O(n)
// O(100n) → O(n)

// Rule 4: Keep the highest term

// O(n² + n + 5)
//        ↓
//      O(n²)
// Interview Shortcut 🧠

// Remember:

// Single loop → O(n)
// Nested loop → O(n²)
// Input half each time → O(log n)
// Direct access → O(1)
// Divide + process → often O(n log n)