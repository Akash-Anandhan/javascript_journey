//array in javascript 
let arr = [1,2,3,3,45,,6]
let arr1 =[] //empty array
//acsesing array items
console.log(arr[4])
//array functions 
//1.concat
let arr2=[2,3,4,5,6,]
let arr3= arr.concat(arr2)
console.log(arr3)
//2.shift
arr.shift()
console.log(arr)
//3.pop()
arr.pop()
console.log(arr)
//4.inculdes
console.log(arr.includes(1))
//5.slice
console.log(arr.slice(0,4))
//6.join
console.log(arr.join('-'))
//7.reverse
console.log(arr.reverse())