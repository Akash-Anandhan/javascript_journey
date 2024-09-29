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

//time manipulations 
const todate = new Date()
console.log(todate)
// date formating 
//1.only required parts of the date like year date second and millisecond 
console.log(`Year : ${todate.getFullYear()}`)
console.log(`Day : ${todate.getDay()}`)
console.log(`Date : ${todate.getDate()}`)
console.log(`Second : ${todate.getSeconds()}`)
console.log(`Millisecond : ${todate.getMilliseconds()}`)


//2. desired formatting 
console.log(`Localdatestring : ${todate.toLocaleDateString()}`)
console.log(`ISO_string : ${todate.toISOString()}`)
console.log(`Datestring : ${todate.toDateString()}`)


// time manipulation program with setinterval
const name = setInterval(
function akash(){
    console.log("akash")
},1000
)

setTimeout(function akash(){
    console.log("interval is being cleared")
    clearInterval(name)    
}, 5000);