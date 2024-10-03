//passing default parameter to a function
function multiply(a,b=7){
    console.log(`the ans is ${a*b}`)
}
// passing only a argumet and letting b as default one 
multiply(3)
//passing both arguments 
multiply(2,3)

//spread operator
arr1=[1,2,3]
arr2=[5,6,7]
conct= [...arr1,...arr2]

function greet(a,b,c,d){
    console.log("a",a);
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
}
greet(2,...arr1)