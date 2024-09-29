// JSON
{
    "name"; "akash",
    "fun"; "drive",
    "age"; 19
}
let person = {
    "name": "akash",
    "fun": "drive",
    "age": 19
}
// converting json to string 
const person1 = JSON.stringify(person)
console.log(person1)
// converting a string back to json(object)
const person2 = JSON.parse(person1)
console.log(person2)