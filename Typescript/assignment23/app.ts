let str1: string = "Hello";
let str2: string = "hello";

console.log(str1 == str2); // False
console.log(str1.toLowerCase() == str2.toLowerCase()); // True

let num1 = 10, num2 = 20;
console.log(num1 == 10); // True
console.log(num1 != 20); // True
console.log(num1 > num2); // False
console.log(num1 <= num2); // True

console.log(num1 > 5 && num2 > 15); // True
console.log(num1 > 15 || num2 > 15); // True

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("apple")); // True
console.log(!fruits.includes("mango")); // True
