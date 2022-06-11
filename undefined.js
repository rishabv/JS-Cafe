// flatten array to the one level

// let arr = [1, 3, 4, [6, 7, [1, 2, 3]], 8, 0, 1];

// let flattened = [].concat(...arr);

//custom flat function for flattening the array
// i.e. polyfill for .flat()
// const myFlat =(arr, depth = 1)=> {
//   let res = [];
//   arr.forEach((e) => {
//     if (Array.isArray(e) && depth > 0) {
//       res.push(...myFlat(e, depth - 1));
//     } else {
//       res.push(e);
//     }
//   });
//   return res;
// }

// console.log(myFlat(arr,2));
// function a(params) {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// above code will print 5, 5 times after every 1 secs

// call, apply and bind

// var person = {
//   name: "RIshabh",
//   hello: function (param) {
//     console.log(this.name, param);
//   },
// };

// var obj = {
//   name: "piyush",
// };

// person.hello("bhai");
// call takes 2 arguements and overrides the this context with parsed arguements
// person.hello.call(obj, "bhai");

// apply takes arguemts in second param as an array
// person.hello.apply(obj, ["bhai"]);

// bind method simply returns the new functions with updated this context
// let newHello = person.hello.bind(obj);

// newHello("bhai")

// infinnite currying

// compose function which run throught right to left

// function add(a) {
//   return a + 5;
// }

// function subtract(a) {
//   return a - 2;
// }

// function multiply(a) {
//   return a * 5;
// }

// const compose = (...functions) => {
//   return (args) => {
//     return functions.reduceRight((arg, fn) => fn(arg), args);
//   };
// };

// let evaluate = compose(add, subtract, multiply);
// console.log(evaluate(4));

// polifill for filter()
// Array.prototype.myfilter = function (callback, context) {
//   var res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback.call(context, this[i], this)) {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// let finalarr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8].myfilter((e) => e > 5);
// console.log(finalarr);

// Tringle pattern with javascript
// function Pattern(n) {
//   let str = "";
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < n-i; j++) {
//       str += "   ";
//     }
//     for (let k = 0; k < 2*i; k++) {
//       str += " * ";
//     }
//     str += "\n";
//   }
//   return str;
// }

// console.log(Pattern(9));

// how to avoid hoisting
// shallow and deep comparing
// closures and Promises
// css box model
// array sorting
// array methods
// useMemo, useCallback

// setTimeout + Closures Interview Question 🔥
// function x() {
//   for (let i = 0; i < 5; i++) {
//     function y(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     y(i);
//   }
// }

// what will be the output of the below code
// function printSomething() {
// 	console.log(something);
// }

// function invokePrintSomething() {
// 	var something = 3;
// 	return function printSomething() {
//         console.log(something);
//     }
// }

// var something = 2;
// invokePrintSomething();

// console.log(1 < 2 < 3); // true
// console.log(3 > 2 >1); // false

// const debounce = (func) => {
//   let timer;
//   return function (...args) {
//     const context = this;
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = null;
//       func.apply(context, args);
//     }, 3000);
//   };
// };

// debounce(handleSearch)

// if(i===1 && i === 2 && i === 3)
// console.log(“yes”)
// else console.log(“yes”)
// What will you implement " i " so that we always get “yes”

// Write a program for sum(1)(2)
// FlatMap() function //-> it implemets the flat feature and map function
// ReduceRight function //-> it will work as reduce function but it iterates from right to left

// let arr1=[1,2,3,4,5,6,7,8,9]
// let sum=arr1.reduce((accumulator,s)=>{
//     return accumulator+s;
// })

// console.log(sum);

// let debounce = (func, t) => {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     let context = this;
//     setTimeout(() => {
//       timer = null;
//       func.apply(context, args);
//     }, t);
//   };
// };