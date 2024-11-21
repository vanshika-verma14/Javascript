// 1st way to write a function
function avg(x,y){
    return Math.round((x+y)/2)
}
let a =2
let b =5
let c =8
 console.log("avg is ", avg(a,b))
 console.log("avg is ", avg(a,c))
 console.log("avg is ", avg(c,b))
 console.log("-------------------")


 // 2st way to write a function

 const avg2 = (x,y) => {
    return (x+y)/2
 }
 console.log("avg is ", avg2(a,b))
 console.log("avg is ", avg2(a,c))
 console.log("avg is ", avg2(c,b))
 console.log("-------------------")