 let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length)

console.log("---------------------------------------")

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more)
console.log("---------------------------------------")


//sort method
let compare = (a, b)=>{
  return b - a
}
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num1.sort(compare)
num1.reverse()
console.log(num1)

num1.forEach((i) => {
  console.log(i )
  
})


console.log("---------------------------------------")


//Splice and Slice
let numm = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = numm.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(numm)
console.log(deletedValues)

let newNum = num.slice(3)
console.log(newNum)
let newNumm = num.slice(3, 5)
console.log(newNumm)