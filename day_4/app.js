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


//dictonary in javascript
let arr4 = {
    firstame : "akash",
    lastname : "anandhan",
    age : 19,
    ismale: true 
}

console.log(arr4)

// asscecing elemets of dictionary in jacvascript
// wrong way but still works 
console.log(arr4.firstame)

//proper way
console.log(arr4['lastname'])

//delete function
delete arr4.firstame

console.log(arr4)

// adding objects to dictionay

arr4.firstname = 'akash'

console.log(arr4)


//function in javascript
function add(x,y){
    return x+y

}

console.log(add(10,20))

function greeting(name){
    console.log(`hi ${name}`)
}
greeting('akash')

