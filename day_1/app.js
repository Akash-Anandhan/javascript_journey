console.log('hello world')
console.log('hello world')
console.log('hello world')
console.log('hello world')

console.warn('this is a warning')
console.error('a serious error is caought ')
 //  for comments 

 // variables
 let akash_age = 10;
 console.log(akash_age)

 // var variables - normal variable 
var asha = 'asha'
console.log(asha)

 // const variable - only one assignment
const akash= 'akash'
console.log(akash)
//akash= 'aaksh1'
//console.log(akash)

// primitive data types in java
// number i  javaScript and arithmetic opertaions 
let num1 = 10 ;
let num2 =  20 ;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(typeof num1)
console.log(typeof akash)

// comparison opertaors - 2 types 
// relational operators - returs true or false 
console.log(num1<num2)
console.log(num1 > num2)
console.log(num1 <= num2)
console.log(num1 >= num2)

//equality operators 
let num3 = '10';
console.log(num1 == num3) // lose equality 
console.log(num1===num3) // strict equality 
console.log(num1 !== num2) // not equal to

// string operations 
let firstname = 'akash'
let secondname = 'anandhan'
let fullname = firstname+secondname

//1. concatination 
console.log(fullname)
console.log(firstname.concat(secondname))
//2.lenght
console.log(firstname.length)
//3.includes 
console.log(firstname.includes('a'))
//4.slice
console.log(firstname.slice(0,2))
//5.trim
console.log(firstname.trim())
//6.CASE
console.log(firstname.toLowerCase())
console.log(firstname.toUpperCase())
//7.slit and join 
console.log(firstname.split('').join(''))