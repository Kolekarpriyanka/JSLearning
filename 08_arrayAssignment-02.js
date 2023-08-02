const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`1. Find the total elements available or length and log on console`)
console.log(`Length of array:- ${arrayNumbers.length}`)

console.log(`-------------------------------------------------------------`)
console.log(
  `2. Log the first element and last element in arrayNumbers and log on console`,
)
console.log(`first Element :- ${arrayNumbers[0]}`)
console.log(`Last Element :- ${arrayNumbers[arrayNumbers.length - 1]}`)

console.log(`-------------------------------------------------------------`)
console.log(
  `3. Log the thirst last element using length property and log on console`,
)
console.log(`3rd Last Element :- ${arrayNumbers[arrayNumbers.length - 3]}`)
console.log(`-------------------------------------------------------------`)
console.log(`4. Find the all even numbers using for in loop and log on console`)

//    for (let index=0 ; index < arrayNumbers.length ;index++){
//       const num = arrayNumbers[index];
//       if(num%2 == 0){
//       const num = arrayNumbers[index];
//           console.log(num)
//       }
//    }

for (const element of arrayNumbers) {
  if (element % 2 == 0) {
    console.log(` Even no are ${element}`)
  }
}

console.log(`-------------------------------------------------------------`)
console.log(`5. Find the all odd numbers using for in loop and log on console`)

for (const element of arrayNumbers) {
  if (element % 2 == 1) {
    console.log(` odd no are ${element}`)
  }
}

console.log(`-------------------------------------------------------------`)
console.log(
  `6. Find all the even positioned elements from arrayNumbers, sum it and log on console`,
)

var count = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  var char = arrayNumbers[index] //
  if (index % 2 == 0) {
    var char = arrayNumbers[index]
    //  console.log(arrayNumbers[index]);
    count = count + char
  }
}
console.log(` Totoal count of the even positioned elements is ;- ${count}`)

console.log(`-------------------------------------------------------------`)
console.log(
  `7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`,
)

var count = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  var char = arrayNumbers[index] //
  if (index % 2 == 1) {
    var char = arrayNumbers[index]
    //  console.log(arrayNumbers[index]);
    count = count + char
  }
}
console.log(` Totoal count of the odd   positioned elements is ;- ${count}`)

console.log(`-------------------------------------------------------------`)
console.log(`8.Find the sum of all elements from arrayNumbers, log on console`)

var count = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  var char = arrayNumbers[index] //

  count = count + char
}
console.log(` Totoal count of the  all  positioned elements is ;- ${count}`)

console.log(`-------------------------------------------------------------`)
console.log(`9.Find the numbers which are multiple of 5`)
var count = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  var char = arrayNumbers[index] //
  if (char % 5 == 0) {
    console.log(`multiple of 5 no Are :- ${arrayNumbers[index]}`)
    //   count=count+char;
  }
}

console.log(`-------------------------------------------------------------`)
console.log(`10.Is number 115 available in arrayNumbers ?`)

var incl = arrayNumbers.includes(115)
console.log(`The no 115 include in array :- "${incl}"  `)

console.log(`-------------------------------------------------------------`)
console.log(`11.Is number 23 available in arrayNumbers ?`)
var incl = arrayNumbers.includes(23)
console.log(`The no 23 include in array :- "${incl}"  `)

console.log(`-------------------------------------------------------------`)
console.log(`12.Insert numbers → 55, 66 before index 3 and log array on console`,)
console.log(` Origial Array :- ${arrayNumbers}`)
var insert = arrayNumbers.splice(3, 0, 55, 66)
console.log(`Insert numbers 55,66 then new array will be  :- ${arrayNumbers}`)

console.log(`-------------------------------------------------------------`)
console.log(`13.Delete 3 elements starting from index 4 and log arrayNumbers on console`,)
console.log(` Origial Array :- ${arrayNumbers}`)
var insert = arrayNumbers.splice(4, 3)
console.log(`Insert numbers 55,66 then new array will be  :- ${arrayNumbers}`)
console.log(`-------------------------------------------------------------`)
