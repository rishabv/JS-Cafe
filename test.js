// class Node {
//   constructor(val) {
//     this.next = null;
//     this.val = val;
//   }
// }

// class List {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   push(val) {
//     let node = new Node(val);
//     if (!this.length) {
//       this.head = node;
//       this.tail = node;
//       return;
//     }
//     this.tail.next = node;
//     node.next = null;
//     // this.head=node;
//   }
// }

// // List.push('v1');

// ============================== no. of jumps required to reach the end of the array
// let arr = [2, 3, 1, 1, 4];
// let prev = 0;
// let jumps = 0;
// let currentjumped = 0;
// for (let i = 0; i < arr.length-1; i++) {
//   prev = Math.max(prev, arr[i] + i);
//   if (i == currentjumped) {
//     jumps++;
//     currentjumped = prev;
//   }
// }
// console.log(jumps);

// ==================================== Merge 2 sorted arrays without using extra space;

// function Merge(nums1, nums2, m, n) {
//     var insertPos = m + n - 1;
//     m--; n--;
//     while (n >= 0) {
//         nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
//     }
// }

// console.log(Merge([1, 3, 5, 7], [2, 4, 7, 9, 11], 4, 5));

// =========================================rotate the array k times;
// function Rotate(nums, k) {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         nums[i + k] = nums[i];

//         console.log(i+k,i);
//     }
//       for (let j = k - 1; j >= 0; j--) {
//         nums[j] = nums.pop();
//       }
//       return nums
// }

// console.log(Rotate([1,2,3,4,5,6,7], 3));

// Missing number in array

// function Missing(nums) {
//     let res=new Array(nums.length+1).fill(-1)
//     for(let i=0;i<nums.length;i++){
//         res[i]=i
//     }
//     return res.indexOf(-1)
// }
// console.log(Missing([1,2,3,5]));

// =========================================Move all negative numbers to one side of array
// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// let j = 0,
//   temp;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0 && i != j) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
// }
// console.log(arr);

// =========================================merge intervals
// let arr = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], arr[i + 1]);
//   if (arr[i][1] >= arr[i + 1][0]) {
//   }
// }

// ========================================kadane's algorithm

// let arr = [-1,-2,-3,-4];
// let temp=0,
//   max_sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   temp = temp + arr[i];
//   if (temp > max_sum) {
//     max_sum = temp;
//   }
//   if (temp < 0) {
//     temp = 0;
//   }
// }

// console.log(max_sum);

// ============================================next permutation

// let arr = [1, 2, 3, 6, 5, 4];
// let temp = 0,
//   a = 0;
// for (let i = arr.length - 1; i > 0; i--) {
//   if (i > 0 && arr[i - 1] < arr[i]) {
//     temp = i - 1;
//     break;
//   }
// }
// for (let i = arr.length - 1; i > 0; i--) {
//   if (i > 0 && arr[i - 1] > arr[i]) {
//     a = i;
//     break;
//   }
// }
// let b = arr[temp];
// arr[temp] = arr[a];
// arr[a] = b;

// =======================================best time to buy and sell stocks

// let prices = [7, 1, 5, 3, 6, 4];
// let diff = 0,
//   max = prices[prices.length - 2];
// for (let i = prices.length - 2; i > 0; i--) {
//   if (prices[i] > max) {
//     max = prices[i];
//   } else {
//     diff=max-prices[i]
//   }
// }

// console.log(diff);

// ==================================Count pairs with given sum

// function sum(arr, k) {
//   let count = 0;
//   let obj = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const diff = k - arr[i];
//     console.log(diff);
//     if (obj.has(diff)) {
//       count += obj.get(diff);
//     }
//     if (obj.has(arr[i])) {
//       obj.set(arr[i], obj.get(arr[i]) + 1);
//     } else {
//       obj.set(arr[i], 1);
//     }
//   }
//   return count;
// }
// console.log(sum([1, 1, 1, 1], 2));

// ===================================common elements in sorted arrays
// let A = Set([1, 5, 10, 20, 40, 80]);
// let B = Set([6, 7, 20, 80, 100]);
// let C = Set([3, 4, 15, 20, 30, 70, 80, 120]);
// let obj = {};

// for (let i = 0; i < A.length; i++) {
//   if (A[i] in obj) {
//     obj[A[i]] += 1;
//   } else {
//     obj[A[i]] = 1;
//   }
// }
// for (let i = 0; i < B.length; i++) {
//   if (B[i] in obj) {
//     obj[B[i]]++;
//   }
// }
// for (let i = 0; i < C.length; i++) {
//   if (C[i] in obj && obj[C[i]] == 2) {
//     console.log(C[i]);
//   }
// }

// =========================================== Sort Array By Parity II
// let input = [4, 2, 5, 7];
// function rearrage(input) {
//   let odd = 1;
//   let even = 0;
//   //   let number;
//   console.log(input.length);
//   while (even < input.length || odd < input.length) {
//     if (input[even] % 2 == 1 && input[odd] % 2 == 0) {
//       [input[even], input[odd]] = [input[odd], input[even]];
//     }
//     if (input[odd] % 2 == 1) {
//       odd = odd + 2;
//     }
//     if (input[even] % 2 == 0) {
//       even = even + 2;
//     }
//   }
//   return input;
// }
// console.log(rearrage(input));

// rearrange-array-alternating-positive-negative-items-o1-extra-space
// let arr = [1, 2, 3, -4, -1, 4];
// function rearrage(arr) {
//   let j = 0;
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 && i != j) {
//       arr[j] = arr[j];
//       j = j + 2;
//     }
//   }
//   return arr;
// }
// console.log(rearrage(arr));

// let arr = [6, -3, -10, 0, 2];
// function rearrage(arr) {
//   let max = 0;
//   let temp = 1;
//   for (let i = 0; i < arr.length; i++) {
//     temp = temp * arr[i];
//     if (temp > max) {
//       max = temp;
//     }
//     if (temp == 0) {
//       temp = 1;
//     }
//   }
//   return max;
// }

// var LengthOfConsecutiveNumbers = (arr) => {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], 0);
//   }
//   let max = 0;
//   for (let i of map.keys()) {
//     if (map.get(i) == 0) {
//       console.log(i);
//       let seq = dfs(map, i);
//       max = Math.max(seq, max);
//     }
//   }
//   return max;
// };

// function dfs(map, key) {
//   if(map.get(key)!==0){
//     return map.get(key)
//   }
//   let seqLn=1
//   if(map.has(key+1)){
//     seqLn+=dfs(map,key+1)
//   }
//   // console.log(key, seqLn);
//   map.set(key, seqLn)
//   return seqLn
// }

// let arr = [0,3,7,2,5,8,4,6,0,1];
// console.log(LengthOfConsecutiveNumbers(arr));

// Array Subset of another array
// let arr1 = [10, 5, 2, 23, 19];
// let arr2 = [19, 5, 3];

// function checkSubArray(arr1, arr2) {
//   let count = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       count++;
//     }
//   }
//   if (count == arr2.length) {
//     return "Yes";
//   }
//   return "No";
// }

// console.log(checkSubArray(arr1, arr2));

// Best time to buy and sell stocks 3 (leetcode)

// const BestTime = (arr) => {
//   let maxprofit = 0,
//     profits = [],
//     maxprice = arr[arr.length - 1];
//   for (let i = 0; i < arr.length; i++) profits[i] = 0;
//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] > maxprice) {
//       maxprofit = arr[i];
//     }
//     console.log(i, arr[i + 1], maxprice - arr[i]);
//     profits[i] = Math.max(arr[i + 1], maxprice - arr[i]);
//   }
//   let min_price = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min_price) min_price = arr[i];
//     profits[i] = Math.max(profits[i - 1], profits[i] + (arr[i] - min_price));
//   }
//   console.log(profits);
//   return profits[arr.length - 1];
// };

// console.log(BestTime([3, 3, 5, 0, 0, 3, 1, 4]));

// Trapping rain water problem

// const Trap = (arr) => {
//   let n = arr.length,
//   left = [], right = [],
//   leftmax = arr[n - 1],
//   rightmax = arr[0];

//   for (let i = 0; i < n; i++) {
//     right[i] = Math.max(arr[i], rightmax);
//     rightmax=Math.max(arr[i],rightmax)
//   }
//   for (let i = n-1; i >= 0; i--) {
//     // console.log(i);
//     left[i] = Math.max(arr[i], leftmax);
//     leftmax=Math.max(arr[i],leftmax)
//   }
//   let water=0;
//   for (let i = 0; i < n; i++) {
//     let rain = Math.min(left[i],right[i])
//     water+=Math.max(rain-arr[i])
//     console.log(Math.max((left[i]+right[i])-arr[i]));
//   }

//   return water;
// };
// console.log(Trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// Candy Distribution

// function Candy(arr) {
//   let sum = 0;
//   let left = [...new Array(arr.length)].map(() => 1);
//   let right = [...new Array(arr.length)].map(() => 1);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] > arr[i]) {
//       left[i + 1] = left[i] + 1;
//     }
//   }
//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i + 1] < arr[i]) {
//       right[i] = right[i + 1] + 1;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     sum += Math.max(left[i], right[i]);
//   }
//   return sum;
// }
// let arr = [12, 4, 3, 11, 34, 34, 1, 67];
// console.log(Candy(arr));

// chocolate distribution GFG
// function Choc(arr, m) {
//   let min = Infinity;
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   for (let i = 0; i <= arr.length - m; i++)
//    {
//     console.log(arr[m-1+i],arr[i]);
//       if(arr[m+i-1] -arr[i]<min){
//           min=arr[m-i+i] - arr[i]
//       }
//   }
//   console.log('ans',min);
//   return min;
// }
// let arr = [3, 4, 1, 9, 56, 7, 9, 12];
// Choc(arr, 5);

// Minimum Size Subarray Sum

// const Solution = (arr, num) => {
//   let start = 0,
//     end = 0,
//     sum = 0,
//     minlength = Number.MAX_SAFE_INTEGER;
//   while (end < arr.length) {
//     sum += arr[end++];
//     console.log(sum);
//     while (sum >= num) {
//       minlength = Math.min(minlength, end - start);
//       sum -= arr[start++];
//     }
//   }
//   return minlength==Number.MAX_SAFE_INTEGER ? 0:minlength;
// };

// let arr = [1,1,1,1,1,1,1,1];
// console.log(Solution(arr, 11));

// function TwoSum(nums, target) {
//   let res = [];
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = i;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let c = target - nums[i];
//     if (map[c] !== undefined && map[c] != i) {
//       return [i, map[c]];
//     }
//   }
//   return [0, 0];
// }

// console.log(TwoSum([3, 2, 4], 6));

// Majority element
// const Solution =(nums)=>{
//   let map={};
//   for (let i = 0; i < nums.length; i++) {
//     if(map[nums[i]]==undefined){
//       map[nums[i]]=1
//     }else{
//       map[nums[i]]++
//     }

//   }
//   let res=0
//   Object.keys(map).map(i=>{
//     if(map[i]>(nums.length/2)){
//       res= i
//     }
//   })
//   return res
// }

// console.log(Solution([2,2,1,1,1,2,2]));

// Excel sheet column number
// const solution = (s)=>{
//   let res=0;
//   for (let i = 0; i < s.length; i++) {
//     let char=s[(s.length-1)-i];
//     res+=Math.pow(26,i)*(char.charCodeAt(0)-64);
//   }
//   return res
// }
// console.log(solution("ZY"));

// contains duplicate

// largest sum of contigous subarray
// function Solution(nums) {
//   let total=0
//   let max=-Number.MIN_SAFE_INTEGER
//   for (let i = 0; i < nums.length; i++) {
//     max=Math.max(nums[i]+max,nums[i])
//     total=Math.max(total, max);

//   }
//   return total
// }

// console.log(Solution([1]));

// First Missing Number in the array
// function Missing(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (
//       nums[i] > 0 &&
//       nums[i] <= nums.length &&
//       nums[nums[i] - 1] !== nums[i]
//     ) {
//       [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
//     } else {
//       i++;
//     }
//   }
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) return i + 1;
//   }
//   return i + 1;
// }
// console.log(Missing([7, 8, 9]));

// Roman to integer
// function Solution(s) {
//   let symbol = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let value = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (symbol[s[i]] < symbol[s[i + 1]]) {
//       value-=symbol[s[i]]
//       console.log();
//     }
//     else {
//       value+=symbol[s[i]]
//     }
//   }
//   console.log(value);
//   return s
// }

// Solution("IX")

// largest common prefix
// function Solution(strs) {
//   let prefix="";
//   let maxlen=Math.min(...strs.map(i=>i.length))
//   console.log(maxlen);
//   for (let i = 0; i < maxlen; i++) {
//     let char=strs[0][i]
//     if(strs.every(str=>str[i]===char)){
//       prefix+=char
//     }else{
//       break
//     }
//   }
//   return prefix
// }

// console.log((Solution(["fruits","frog","fro"])))

// const Reverse=(s)=>{
//   let str=""
//   for (let i = s.length-1; i >= 0; i--) {
//     s.push(s[i])
//   }
//   return s.slice(s.length/2, s.length)
// }

// console.log((Reverse(["H","a","n","n","a","h"])))

// Remove Duplicate from string
// function Remove(str) {
//   let map = {};
//   let size=str.length
//   for (let i = 0; i < str.length; i++) {
//     if (map[str[i]] !== undefined) {
//       map[str[i]]++;
//     } else {
//       map[str[i]] = 1;
//     }
//   }
//   Object.keys(map).map((i) => {
//     str += i;
//   });
//   str=str.slice(17, 27)
//   console.log(str.sort((a,b)=>a-b));
// }
// Remove("Rishabhshabhhhhhh");

// sort colors leetcode
// function Sort(nums) {
//   let res = [],
//     zero = 0,
//     one = 0,
//     two = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) {
//       zero++;
//     } else if (nums[i] == 1) {
//       one++;
//     } else {
//       two++;
//     }
//   }
//   nums.length = 0;
//   for(let i=0;i<zero;i++) nums.push(0)
//   for(let i=0;i<one;i++) nums.push(1)
//   for(let i=0;i<two;i++) nums.push(2)

//   return nums;
// }

// console.log(Sort([2, 0, 2, 1, 1, 0]));

// Spriral Matrix problem

// var spiralOrder = function (matrix) {
//   let r = matrix.length,
//     c = matrix[0].length;
//   let [left, right, top, bottom] = [0, c - 1, 0, r - 1];

//   let arr = [];

//   while (left <= right && top <= bottom) {
//     for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
//     top++;

//     for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
//     right--;

//     if (top <= bottom) {
//       // condition 1
//       for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
//       bottom--;
//     }

//     if (left <= right) {
//       // condition 2
//       for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
//       left++;
//     }
//   }

//   return arr;
// };

// console.log(Spiral);

// Search a 2D Matrix

// function Search(matrix, target) {
//   let bool = false;
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i] && matrix[i].includes(target)) {
//       bool = true;
//     }
//     console.log(matrix[i]);
//   }
//   return bool
// }

// let arr = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// console.log(Search(arr,13));

// function Solution(matrix, target) {
//   let r = 0;
//   let c = matrix[0].length-1;
//   while(c>=0 && r<=matrix.length-1){
//     if(target==matrix[r][c]){
//       return true
//     } else if(target<matrix[r][c]){
//       c--
//     } else if(target>matrix[r][c]){
//       r++
//     }
//   }
//   return false
// }

// function Solution(arr, target) {
//     let res=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===target){
//             res.push(i)
//             break
//         }
//     }
//     if(res.length==0){
//         res.push(-1)
//     }
//     for (let i = arr.length-1; i >=0; i--) {
//         if(arr[i]===target){
//             res.push(i)
//             break
//         }
//     }
//     if(res.length==1){
//         res.push(-1)
//     }
//     console.log(res);
// }

// Solution([5,7,7,8,8,10],5)

// function ReverseInteger(s) {
//     let isNeg=s<0
//     s = s.toString();
//   let str = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     str += s[i].toString();
//   }
//   return isNeg ? '-'+parseInt(str):parseInt(str)
// }

// console.log(ReverseInteger(-120));

// function Permutation(s1, s2) {
//   if (s1.length > s2.length) return false;

//   const s1Chars = new Array(26).fill(0);
//   const window = new Array(26).fill(0);

//   for (let char of s1) {
//     let id = char.charCodeAt() - 97;
//     s1Chars[id]++;
//   }
//   for (let i = 0; i < s1.length; i++) {
//     let id = s2[i].charCodeAt() - 97;
//     window[id]++;
//   }
//   let start = 0;
//   let end = s1.length - 1;
//   while (end < s2.length) {
//     if (window.join("") == s1Chars.join("")) return true;
//     end++;
//     if (end === s2.length) break;
//     const startIdx = s2[start].charCodeAt() - 97;
//     const endIdx = s2[end].charCodeAt() - 97;
//     console.log(start, end);
//     console.log(window[startIdx]);
//     window[startIdx]--;
//     window[endIdx]++;
//     start++;
//     // console.log(window);
//   }
//   return false;
// }

// console.log(Permutation("ab", "eidbaooo"));
// ----------------------- How many numbers have exactly 9 dividers from 0 to n
// function Solution(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     let bool = isDivisible(i);
//     if (bool) {
//       count++;
//     }
//   }
//   return count;
// }

// function isDivisible(num) {
//   let index = 0,
//     divisible = false;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       index++;
//     }
//   }
//   if (index === 9) {
//     divisible = true;
//   }
//   return divisible;
// }

// console.log(Solution(100));

// Count binary substrings

// function Solution(s) {
//   let count = 0,
//     zeros = 0,
//     ones = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "0") {
//       zeros++;
//     } else if (s[i] == "1") {
//       ones++;
//     }
//     if (zeros === ones) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(Solution("0111100010"));

// Count binary substrings

// function Solution(s) {
//   let prev = 0,
//     curr = 1,
//     sum = 0;
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === s[i]) {
//       curr++;
//     } else {
//       prev = curr;
//       curr = 1;
//     }
//     if (prev >= curr) {
//       sum++;
//     }
//   }
//   return sum;
// }

// console.log(Solution("00110011"));

// function Palindrome(num) {
//   let res = false;
//   const arr = String(num).split("");
//   while (arr.length > 1) {
//     console.log(arr.shift(), arr.pop());
//     if (arr.shift() !== arr.pop()) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(Palindrome(111113));

// longest substring with non repeating characters
// function Solution(s) {
//   let start = -1,
//     maxlen = 0;
//   let seen = {};
//   for (let i = 0; i < s.length; i++) {
//     if (seen[s[i]] > start) {
//       start = seen[s[i]];
//     }
//     seen[s[i]] = i;
//     maxlen = Math.max(maxlen, i - start + 1);
//   }
//   console.log(maxlen);
//   return maxlen;
// }

// Solution("abcabcbb");

// Container With Most Water
// function Solution(height) {
//   let water = 0;
//   let l = 0,
//     r = height.length - 1;
//   while (r > l) {
//     water = Math.max(water, (r - l) * Math.min(height[l], height[r]));
//     height[l] <= height[r] ? l++ : r--;
//   }
//   return water;
// }
// Solution([1, 8, 6, 2, 5, 4, 8, 3, 7]);

// Valid Parentheses

// function Parenthesis(s) {
//   let res = false;
//   let map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (map[char]) {
//       stack.push(map[char]);
//     } else if (char !== stack.pop()) {
//       return false;
//     }
//   }
//   return !stack.length
// }

// console.log(Parenthesis('()[]{}'));

// Intersection of Two Arrays

// function Solution(nums1, nums2) {
//   return [...new Set(nums2.filter(i=>nums1.includes(i)))]
// }

// console.log(Solution([4,9,5], [9,4,9,8,4]));

// Power of three
// function Solution(n) {
//   while (n > 1) {
//     if (n % 3 == 0) {n = n / 3}else break
//   }
//   return n===1;
// }

// console.log(Solution(8));

// Merge 2 sorted lists

// function ListNode() {
//   this.next = null;
//   this.value = value === undefined ? 0 : value;
// }

//     function Merge(list1, list2) {
//     let newList = new ListNode();
//     let head = newList;

//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//         newList.next = new ListNode(list1.val);
//         list1 = list1.next;
//         } else {
//         newList.next = new ListNode(list2.val);
//         list2 = list2.next;
//         }
//         list = list.next;
//     }

//     if (list1 !== null) {
//         list.next = list1;
//     }
//     if (list2 !== null) {
//         list.next = list2;
//     }

//     return head.next

//     }

// Reverse a linked list
// function ReverseList(head) {
//   let prev = null,
//     next = null;
//   while (head !== null) {
//     next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next
//   }
//   return prev;
// }

// Reverse Only Letters
// function Solution(s) {
//   let spaces = [];
//   s = s.split('-')
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "-") {
//       spaces.push(i);
//     }
//   }
//   for (let i = s.length - 1; i >= 0; i--) {
//     // console.log();
//     res += s[i];
//   }

//   return res;
// }

// console.log(Solution("a-bC-dEf-ghIj"));

// reverse vowels of a string

// function reverseVowels(s) {
//   let v = ["a", "e", "i", "o", "u"];
//   let b = [];
//   arr = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     if (v.includes(s[i].toLowerCase())) {
//       b.push(s[i]);
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (v.includes(s[i].toLowerCase())) {
//       arr[i] = b.pop();
//     }
//   }
//   console.log(b);
//   return arr.join("");
// }

// console.log(reverseVowels("hello"));

// Search in Rotated Sorted Array
// function solution(nums, target) {
//   let res = 0;
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     console.log(nums[mid]);
//     if (nums[mid] === target) {
//       return mid;
//     }

//     // left side is sorted
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target <= nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[right] >= target && target >= nums[mid]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// }

// console.log(solution([4,5,6,7,0,1,2], 0));

// Gas Station

// function Solution(gas, cost) {
//   let totalgas = 0,
//     totalcost = 0,
//     start = 0,
//     capacity = 0;
//   for (let i = 0; i < gas.length; i++) {
//     totalcost += cost[i];
//     totalgas += gas[i];
//   }
//   if (totalcost < totalgas) {
//     return -1;
//   }

//   for (let i = 0; i < gas.length; i++) {
//     capacity += gas[i];
//     capacity -= cost[i];
//     if (capacity < 0) {
//       start = i + 1;
//       capacity = 0;
//     }
//   }
//   return start;
// }

// console.log(Solution([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

// Set Matrix Zeroes

// function Solution(matrix) {
//   let r = matrix[0].length;
//   let c = matrix.length;
//   let track = [];
//   for (let i = 0; i < c; i++) {
//     for (let j = 0; j < r; j++) {
//       if (matrix[i][j] === 0) track.push([i, j]);
//     }
//   }

//   for (let i = 0; i < track.length; i++) {
//     var [x, y] = track[i];
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][y] = 0;
//     }
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[x][j] = 0;
//     }
//   }

//   return matrix;
// }

// console.log(Solution([[1,0]]));

// Product of Array Except Self
// function Solution(nums) {
//   var output = [];
//   var leftMult = 1;
//   var rightMult = 1;
//   for (var i = nums.length - 1; i >= 0; i--) {
//     output[i] = rightMult;
//     rightMult *= nums[i];
//   }
//   for (var j = 0; j < nums.length; j++) {
//     output[j] *= leftMult;
//     leftMult *= nums[j];
//   }
//   return output;
// }

// console.log(Solution([-1, 1, 0, -3, 3]));

// Permutations
// function Permute(nums) {
//   let res = [];
//   backtrack(nums, res);
//   return res;
// }

// function backtrack(nums, res, n = 0) {
//   if (n == nums.length - 1) {
//     res.push(nums.slice(0));
//     return ;
//   }
//   for (let i = n; i < nums.length; i++) {
//     console.log(i, n);
//     [nums[i], nums[n]] = [nums[n], nums[i]];
//     backtrack(nums, res, n + 1);
//     [nums[i], nums[n]] = [nums[n], nums[i]];
//   }
// }

// function Solution(s) {
//   let stack = 0;
//   for (let i = 0; i <= s.length; i++) {
//     let char = s[i];
//     if (char == "(" || char == "*") {
//       stack++;
//     } else if (char == ")") {
//       if (stack < 1) {
//         return false;
//       } else {
//         stack--;
//       }
//     }
//   }
//   stack = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     let char = s[i];
//     if (char == ")" || char == "*") {
//       stack++;
//     } else if (char == "(") {
//       if (stack < 1) {
//         return false;
//       } else {
//         stack--;
//       }
//     }
//   }

//   return true;
// }

// console.log(Solution("()("));

// maximum-number-of-balloons

// function Ballons(text) {
//   let ballons = 0;
//   let map = {};
//   for (let i of text) {
//     if (map[i]) {
//       map[i]++;
//     } else {
//       map[i] = 1;
//     }
//   }
//   while(true){
//     if(map.b && map.a && map.n && map.l>=2 && map.o>=2){
//       ballons++
//       map.b-=1;
//       map.a-=1;
//       map.l-=2;
//       map.o-=2;
//       map.n-=1;
//     } else{
//       return ballons
//     }
//   }
//   return 0
// }

// console.log(Ballons('loonbalxballpoon'))

// remove duplicates from an array

// function Rmove(nums) {
//   let count = 0;
//   for (const key of nums) {
//     if (count == 0 || key > nums[count - 1]) {
//       nums[count++] = key;
//     }
//   }
//   return nums;
// }

// console.log(Rmove([1,1,1,4,5,6,6,7]));

//
// function Solution(arr) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]] === undefined) {
//       map[arr[i]] = 1;
//     } else {
//       map[arr[i]]++;
//     }
//   }
//   let max=0;
//   for (const key in map) {
//     max=Math.max(max, map[key])
//   }
//   return max;
// }

// console.log(Solution(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"]));

// top-k-frequent-words

// function Solution(words, k) {
//   let map = {};
//   for (let i = 0; i < words.length; i++) {
//     i;
//     if (map[words[i]]) {
//       map[words[i]] = map[words[i]] + 1;
//     } else {
//       map[words[i]] = 1;
//     }
//   }
//   let sorted = Object.keys(map).sort((a, b) => {
//     if (map[a] == map[b]) {
//       return a > b ? 1 : -1;
//     } else {
//       return map[b] - map[a];
//     }
//   });
//   return sorted.slice(0, k);
// }

// console.log(
//   Solution([
//     "rishabh",
//     "leetcode",
//     "daily",
//     "leetcode",
//     "verma",
//     "verma",
//     "verma",
//     "verma",
//     "verma",
//   ])
// );

// count of duplicates in a array;
// function Solution(arr) {
//   let res = 0;
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i]]) {
//       map[arr[i]] = map[arr[i]] + 1;
//     } else {
//       map[arr[i]] = 1;
//     }
//   }
//   Object.keys(map).map((i) => {
//     if (map[i] > 1) {
//       res++;
//     }
//   });
//   return res;
// }

// console.log(Solution([1, 2, 3, 4, 1, 4, 4, 3, 3, 3, 2, 4, 4]));

//move zeros

// function Solution(arr) {
//   let pos = 0;
//   arr.forEach((e) => {
//     if (e != 0) {
//       arr[pos++] = e;
//     }
//   });
//   while (pos<arr.length) {
//       arr[pos++]=0
//   }
//   return arr;
// }

// console.log(Solution([1, 0, 2, 0, 3, 4, 0, 0, 2, 5, 6]));

// remove duplicates from an array

// function Solution(nums) {
//   let i = nums.length > 0 ? 1 : 0;
//   nums.forEach((e) => {
//     if (e > nums[i - 1]) {
//       nums[i++] = e;
//     }
//   });
//   return i
// }

// console.log(Solution([1,2,2,2,3,4,5,5,5,5,6,7,8]));

// valid anagram
// function Solution(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let map = {};
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]]) {
//       map[s[i]] = map[s[i]] + 1;
//     } else {
//       map[s[i]] = 1;
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (!map[t[i]]) {
//       return false;
//     }
//     map[t[i]]--;
//   }

//   return true;
// }

// console.log(Solution("anagram", "naggram"));

// Find pivot index

// function Solution(nums) {
//   let leftsum = 0,
//     rightsum = 0;
//   for (let i = 1; i < nums.length; i++) {
//     rightsum += nums[i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (leftsum === rightsum) {
//       return i;
//     } else {
//       leftsum += element;
//       rightsum -= nums[i + 1];
//     }
//   }
//   return -1;
// }

// console.log(Solution([1, 7, 3, 6, 5, 6]));

// var intersect = function (nums1, nums2) {
//   let res = [];
//   let map = {};
//   nums1.forEach((e) => {
//     if (map[e]) {
//       map[e]++;
//     } else {
//       map[e] = 1;
//     }
//   });
//   nums2.forEach((e) => {
//     if (map[e] && map[e] > 0) {
//       res.push(e)
//       map[e]--
//     }
//   });
//   return res;
// };

// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

// maximum roduct subarray

// function Solution(nums) {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {

//   }
//   return res;
// }

// Plus one

// function Solution(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] !== 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.unshift(1);
//   return digits;
// }

// console.log(Solution([6, 1, 4, 5, 3, 9, 0, 1, 9, 6, 7, 0, 5, 5, 4, 3]));

// Maximum product subarray

// function Solution(nums) {
//   let max = nums[0],
//     min = nums[0],
//     result = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     const temp = max;
//     max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
//     min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
//     if (max > result) {
//       result = max;
//     }
//   }
//   return result;
// }

// console.log(Solution([6, -1, 4, 0, 3, 9, 1]));
// Maximum sum subarray leetcode
// function Solution(nums) {
//   let max = nums[0],
//     min = nums[0],
//     result = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     const temp = max;
//     max = Math.max(Math.max(max + nums[i], min + nums[i]), nums[i]);
//     min = Math.min(Math.min(temp + nums[i], min + nums[i]), nums[i]);
//     if (max > result) {
//       result = max;
//     }
//   }
//   return result;
// }

// console.log(Solution([-2,1,-3,4,-1,2,1,-5,4]));

// Max Consecutive Ones

// function Solution(nums) {
//   let bool = false,
//     max = 0,
//     count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 1) {
//       count++;
//     } else {
//       count = 0;
//     }
//     max = Math.max(count, max);
//   }
//   return max;
// }

// console.log(Solution([1, 1, 0, 1, 1, 1, 0, 3, 1, 1, 1, 1, 1]));

// convert binary program

// function binary(num) {
//   let arr = [];
//   let rem = 0;
//   let res = 0;
//   while (num > 0) {
//     rem = num % 2;
//     num = Math.floor(num / 2);
//     arr.push(rem);
//   }
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == 1) {
//         arr[i] = 0;
//       } else {
//         arr[i] = 1;
//       }
//     }
//   let rank = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res = res + 2 ** rank;
//     rank++;
//   }
//   console.log(res);
//   return arr;
// }
// console.log(binary(5));

// letter combinations

// const letterCombinations = (digits) => {
//   if (digits == null || digits.length === 0) return [];

//   const map = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   const res = [];
//   const go = (i, s) => {
//     if (i === digits.length) {
//       res.push(s, digits.length);
//       return;
//     }

//     for (const c of map[digits[i]]) {
//       go(i + 1, s + c);
//     }
//   };

//   go(0, "");
//   return res;
// };

// console.log(letterCombinations([2, 7]));

// longest substring without repeating characters
// function Substring(s) {
//   let seen = {},
//     start = 0,
//     maxlen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (seen[s[i]]!==undefined) {
//       start = Math.max(seen[s[i]] + 1, start);
//     }
//     seen[s[i]]= i;
//     console.log(start, i);
//     maxlen = Math.max(i - start + 1, maxlen);
//   }
//   return maxlen;
// }

// console.log(Substring("abcabcbb"));

// function firstUnique(s) {
//     let map={}
//     for (let i = 0; i < s.length; i++) {
//         if(map[s[i]]!==undefined){
//             map[s[i]]=2
//         } else{
//             map[s[i]]=1
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]]==1 && map[s[i]]) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(firstUnique("loveleetcode"));

// function LCS(text1, text2) {
//   text1 = text1.split("");
//   text2 = text2.split("");
//   let count = 0;
//   text1.forEach((element) => {
//     if (text2.includes(element)) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(LCS("ezupkr", "ubmrapg"));

// var a= 21
// function Test(params) {
//     console.log(a);
//     var a=10
// }
// Test()

// Rotate the matrix on 90 degree

// function Rotate(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix[i].length; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length/2; j++) {
//         console.log(matrix[i][j] , matrix[i][matrix.length-1-j],j);
//         [matrix[i][j] , matrix[i][matrix.length-1-j]]=[ matrix[i][matrix.length-1-j],matrix[i][j]]
//     }
//   }
//   return matrix;
// }

// console.log(Rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]));

// Flips to Make the Binary String Alternating
// function Flip(s) {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     stack.push(s[i]);

//   }
//   return s;

// }

// console.log(Flip("111000"));

// Median of Two Sorted Arrays
// function Median(nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;
//   let len = nums1.length + nums2.length;

//   var insertPos = m + n - 1;
//   m--;
//   n--;
//   while (n >= 0) {
//     nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//   }

//   console.log(nums1);
//   return Math.floor(nums1.length % 2
//     ? nums1[Math.floor(len / 2)]
//     : (nums1[len / 2 - 1] + nums1[len / 2]) / 2);
// }

// console.log(Median([1, 3], [2]));

// single number
// function Solution(nums) {
//   let val = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     val ^= nums[i];
//   }
//   return val;
// }

// Best time to buy and sell stocks

// function Solution(nums) {
//   let time = 0;
//   let max = nums[nums.length - 1];
//   for (let i = nums.length-1; i >= 0; i--) {
//     max = Math.max(nums[i], max);
//     time = Math.max(time, max - nums[i]);
//     console.log(max);
//   }
//   return time;
// }

// console.log(Solution([7, 1, 5, 3, 6, 4]));

