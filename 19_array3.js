let num = [3, 5, 1, 2, 4,2,3,112,21]
for(let i=0; i < num.length ; i++)
{
    let a = num[i] + num[i+1]
  console.log(a)
}
let arr2 = Array.from(num)
console.log(arr2)
console.log("------------------------------------------------")
// ForEach Loop
num.forEach((element) => {
    console.log(element * element)
  })
  console.log("------------------------------------------------")

  // Array.from 
  let name = "Harry"
  let arr = Array.from(name)
  console.log(arr)
  console.log("------------------------------------------------")

  // for...of 
  for (let item of num){
    console.log(item)
  }
  console.log("------------------------------------------------")

  // for...in
  for (let i in num){
    console.log(num[i])
  }