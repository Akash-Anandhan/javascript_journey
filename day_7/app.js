//rest operator (...)
function guy(fname, lname, ...hobies){
    console.log("hi",fname , lname)
    x= hobies.length
    for(let i= 0;i<x;i++){
        console.log("i like ",hobies[i])
    }   
}
// using rest operator to pass an array with n number of i0tems into a function
arr=["aksh","anandhan","drawing","writhing","dancing"]
guy(...arr)