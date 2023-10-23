//Bài 1
// function findLargest(numberStr) {
//     let numberArr = numberStr.split("").map(Number);
//     let uniqueNumber = Array.from(new Set(numberArr));
//
//     let maxNumber = Math.max(...uniqueNumber);
//
//     return maxNumber;
// }
//
// let input = prompt("Nhập vào một chuỗi có 5 số nguyên, cách nhau bằng dấu cách: ");
// let largestUniqueNumber = findLargest(input);
// alert("Bài 1: Số lớn nhất và duy nhất: " + largestUniqueNumber);

//Bài 2
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// function sumPrimes(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (isPrime(numbers[i])) {
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }
//
// let input = prompt("Nhập vào một chuỗi số nguyên, cách nhau bằng dấu cách: ");
// let numberArr = input.split(" ").map(Number);
// let sum = sumPrimes(numberArr);
// alert("Bài 2: Tổng các số nguyên tố trong chuỗi: " + sum);

//Bài 3
// (row === 1 && (col === 1 || col === 4 || col === 7)) ||
// (row === 2 &&
//     (col === 2 || col === 3 || col === 5 || col === 6)) ||
// (row === 3 && col >= 2 && col <= 6) ||
// (row === 4 && )

//Bài 4
// function removeNumbers(inputStr) {
//     let outputStr = "";
//     for (let i = 0; i < inputStr.length; i++) {
//         if (isNaN(inputStr[i])) {
//             outputStr += inputStr[i];
//         }
//     }
//     return outputStr;
// }
//
// let input = prompt("Nhập vào một chuỗi kí tự có cả chữ và số: ");
// let output = removeNumbers(input);
// alert("Bài 4: Chuỗi kí tự đã xóa số: " + output);

//Bài 5
// let string = prompt("Nhập vào chuỗi cần đảo ngược: ")
//
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//
// alert("Bài 5: Chuỗi đảo ngược: " + reverseString(string))
