// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("numLength", () => {
//   it("returns an array length containing the numbers of the Fibonacci sequence.", () => {
//     const fibLength1 = 6
//     const fibLength2 = 10
//     expect(numLength(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(numLength(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// FAIL  ./code-challenges.test.js
// numLength
//   ✕ returns an array length containing the numbers of the Fibonacci sequence. (1 ms)
// ● numLength › returns an array length containing the numbers of the Fibonacci sequence.
// ReferenceError: numLength is not defined


// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// b) Create the function that makes the test pass.

// const numLength = (number) => {
//   let fib = []

// fib[0] = 1;
// fib[1] = 1;
//   for (var i =2, i < (number); i++) {
//   }
//   return fib
// }
// console.log(fibLength1(6))

// Pseudo code:
// function: numLength
// input: const fibLength1 = 6
// const fibLength2 = 10
// output: [1, 1, 2, 3, 5, 8]
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// process: iteration to cycle through my (empty) array, for loop as my method to iterate through, 1+1=2, 1+2=3, 2+3=5 ect..., maybe .map instead since t also filters?


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("valueSorter", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest", () => {
//     const studyMinutesWeek1 = {
//         sunday: 90,
//         monday: 30,
//         tuesday: 20,
//         wednesday: 15,
//         thursday: 30,
//         friday: 15,
//         saturday: 60
//     }
//     const studyMinutesWeek2 = {
//         sunday: 100,
//         monday: 10,
//         tuesday: 45,
//         wednesday: 60,
//         thursday: 20,
//         friday: 15,
//         saturday: 65
//       }
//     expect(valueSorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(valueSorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })
// FAIL  ./code-challenges.test.js
// valueSorter
// ✕ takes in an object and returns an array of the values sorted from least to greatest (1 ms)
// ● valueSorter › takes in an object and returns an array of the values sorted from least to greatest
// ReferenceError: valueSorter is not defined

// b) Create the function that makes the test pass.
// Create a function that takes in an object and returns an array of the values sorted from least to greatest.

// const valueSorter = (studyMinutesWeek1) => {
//   return 
// }
// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }

// const valueSorter = Object.values(studyMinutesWeek1, )


// let numbers = valueSorter

// numbers.sort(function( a , b) {
//   if(a > b) return 1;
//   if(a < b) return -1;
//   return 0;
// });

// console.log(numbers)

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }

// const valueSorter = Object.values(studyMinutesWeek2)

// let numbers = valueSorter

// numbers.sort(function( a , b) {
//   if(a > b) return 1;
//   if(a < b) return -1;
//   return 0;
// });

// console.log(numbers)

// Pseudo code: objects.values is going to take our value and convert them into an array that i can then use .sort() to sort from least to greatest. 
// a is the first number compared and b is the second.
// a = 90, b=30
// so if a<b a moves forward, if a < b a moves back 1 index position

//  I know my functions work seperately but i was not able to figure out how to make them work together therefor was not able to secure pass test.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []

// describe("accSum", () => {
//   it("takes in an array and returns an array of the accumulating sum", () => {
//     const accountTransactions1 = [100, -17, -23, -9]
//     const accountTransactions2 = [250, -89, 100, -96]
//     const accountTransactions3 = []
//     expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//     expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//     expect(accSum(accountTransactions3)).toEqual([])
//   })
// })

// FAIL  ./code-challenges.test.js
// accSum
// ✕ takes in an array and returns an array of the accumulating sum (1 ms)
// ● accSum › takes in an array and returns an array of the accumulating sum
// ReferenceError: accSum is not defined

// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

// const accSum = (array) => {
  
//   return array.map();
// }

// const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []


// Pseudo code:
// function: accSum
// input: 
// output:
// process: I need to set a variable equal to zero and then map over the array because map takes one array and returns another. I layed out my function bones but could not figure out the logic to go inside.


