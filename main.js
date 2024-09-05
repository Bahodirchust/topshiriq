// 1
// function checkAge(birthYear) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;
//   if (age >= 18) {
//     return "kattasiz";
//   } else {
//     return "kichiklisiz";
//   }
// }
// checkAge(15);
// const birthYear = 2005;
// const result = checkAge(birthYear);
// console.log(result);

// 2
// function checkNumber(num) {
//   if (num >= 0) {
//     console.log("musbat");
//   } else {
//     console.log("manfiy");
//   }
// }
// checkNumber(3);

// 3
// function countPositiveNumbers(nums) {
//   const positiveNumbers = nums.filter((num) => num > 0);
//   return positiveNumbers.length;
// }
// const numbers = [2, -6, 9];
// const result = countPositiveNumbers(numbers);
// console.log(`Musbat sonlar soni: ${result}`);

// 4
// function checkOddEven(num) {
//   return num % 2 === 0 ? `${num} - juft` : `${num} - toq`;
// }
// console.log(checkOddEven(3));
// console.log(checkOddEven(6));

// 5
// function processNumber(num) {
//   return num % 2 === 0 ? num / 2 : num * 2;
// }

// console.log(processNumber(7));
// console.log(processNumber(6));

// 6
// function modifyNumber(num) {
//   if (num === 0) return 10;
//   return num > 0 ? num + 1 : num - 2;
// }
// console.log(modifyNumber(0));
// console.log(modifyNumber(4));
// console.log(modifyNumber(-3));

// 7
// function sortTwoNumbers(a, b) {
//   return a > b ? [a, b] : [b, a];
// }
// console.log(sortTwoNumbers(5, 3));
// console.log(sortTwoNumbers(2, 8));

// 8
// function adjustNumber(num) {
//     if (num > 0 && num % 2 === 0) {
//         return num + 1;
//     }
//     return num;
// }
// console.log(adjustNumber(8));
// console.log(adjustNumber(7));
// console.log(adjustNumber(-6));

// 9
// function multiplyLarger(a, b) {
//   return Math.max(a, b) * 10;
// }
// console.log(multiplyLarger(5, 8));
// console.log(multiplyLarger(10, 2));

// 10
// function countOddEvenNumbers(nums) {
//   let oddCount = 0;
//   let evenCount = 0;
//   nums.forEach((num) => {
//     if (num % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   });
//   return { odd: oddCount, even: evenCount };
// }
// const numbers = [7, 8, 3];
// const counts = countOddEvenNumbers(numbers);
// console.log(`Juft sonlar soni: ${counts.even}, Toq sonlar soni: ${counts.odd}`);
