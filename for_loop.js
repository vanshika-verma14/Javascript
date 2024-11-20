for (let i =1 ; i <= 10 ; ++i){
    console.log(i)
}
// console.log(i) // scope of i gets over in after completion of block
console.log("---------------")

for (var i =1 ; i <= 10 ; ++i){
    console.log(i)
}
console.log("---------------")
console.log(i) 
console.log("---------------")

let obj ={
name : "Vanshika",
age : 18,
abc : 56,
ac : 6,
ab : 5,

}
for(let j in obj){
    console.log(j)
}
console.log("---------------")

/*for(let j of obj){
    console.log(j)
}
//TypeError: obj is not iterable
FOR-OF WORKS ONLY ON ARRAYS AND STRINGS
*/
for(let j of "Vanshika"){
    console.log(j)
}