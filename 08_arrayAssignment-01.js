const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`given array fruits`);
console.log(arrayFruits);
console.log(`-------------------------------------------------------------`);
console.log(`1.First element:- "${arrayFruits[0]} "`);

console.log(`1.Last element:- "${arrayFruits[arrayFruits.length-1]} "`);
console.log(`-------------------------------------------------------------`);
console.log(`2. Add element → "Papaya" before the element 'Banana' and then log array on console`);
 var addfirst =arrayFruits.unshift("Papaya")
console.log(arrayFruits);
console.log(`-------------------------------------------------------------`);
// var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`3.Remove 'Mango' from the array`);

 var magremove =arrayFruits.splice(4, 1);
 console.log(arrayFruits);
 console.log(`-------------------------------------------------------------`)
 console.log(`4.Add element or insert an element 'Pineapple' at the last position`);
 var addfirst =arrayFruits.push("Pineapple")
console.log(arrayFruits);
console.log(`-------------------------------------------------------------`)
console.log(`5. Insert an element - 'Dragon Fruit' before "Water Melon"`);
arrayFruits.splice(4, 0, "Dragon Fruit")
console.log(arrayFruits);
console.log(`-------------------------------------------------------------`)
console.log(`6. Replace an element 'Orange' with 'Kiwi'`);
arrayFruits[2] = "Kiwi";
console.log(arrayFruits);
console.log(`-------------------------------------------------------------`)
console.log(`7. Log the elements starting from index 1 to 4'`);
 var first4element =arrayFruits.slice(1,4)
console.log(first4element);
console.log(`-------------------------------------------------------------`)
 console.log(`8. Only select last 3 element and log on console: Use the length property'`);
  
//    console.log(`last Element;- "${arrayFruits[arrayFruits.length-1]}" `);
//    console.log(`2nd last Element;- "${arrayFruits[arrayFruits.length-2]}"`);
//    console.log(`3rd last Element;- "${arrayFruits[arrayFruits.length-3]}"`);
   console.log(`-------------------------------------------------------------`)
 console.log(arrayFruits);
   var first4element =arrayFruits.slice(arrayFruits.length-3,arrayFruits.length)
   console.log(` Last 3 element are ;- ${first4element}`);

  //  console.log(arrayFruits.length);