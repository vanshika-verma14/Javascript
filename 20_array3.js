 //forEach loop existing array pr work krti h or map() new array bana deti h
 let arr = [2,3,5,6,8,9,4]
 let num = [2,3,5,6,8,9,4]

 let a=   arr.map((value) => {
   b = value +1
   console.log(b )
   return b
 })
 console.log(a )
 console.log(arr)
 console.log("-----------------------------------------")

arr.forEach((value) => {

   console.log(value * value )
 
 })

 console.log(arr)
 console.log("-----------------------------------------")

 // Array.from 
let name = "Harry"
let arr1 = Array.from(name)
console.log(arr1)
console.log("-----------------------------------------")

// for...of 
for (let item of num){
  console.log(item)
}
console.log("-----------------------------------------")

// for...in
for (let i in num){
    console.log(i,num[i])
}
console.log("-----------------------------------------")

let arr2 =[45,23,21,0,3,5]
let a3 = arr2.filter((i)=>{
    return i <10
})
console.log(a3)
console.log("-----------------------------------------")

//ARRAY REDUCE METHOD
 
let arr4 =[45,23,21,0,3,5]
let a4 = arr2.reduce((H1,H2)=>{
     B = H1+H2 
    console.log(H1, H2 ,B)
    return H1+H2 
})
console.log("------")

console.log(a4)