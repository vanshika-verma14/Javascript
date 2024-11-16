let mark =[89,88,78,68,87,false, "absent"]
console.log(mark[0])
console.log(mark[2])
console.log(mark[7])
mark[0] = 94
mark[9 ] = 66
console.log(mark)
console.log(mark.length) 

console.log("-----------------------------------")


// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)