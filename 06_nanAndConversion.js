var result = 0=='';
console.log(result);
console.log(`Why result is true because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 0=='0';
console.log(result);
console.log(`Why result is true because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 0=='false';
console.log(result);
console.log(`Why result is false because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 0=='undefined';
console.log(result);
console.log(`Why result is false because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 1=='[1]';
console.log(result);
console.log(`Why result is false because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 1=='true';
console.log(result);
console.log(`Why result is true because their is implicit conversion from boolean value true to string 'true'`);
   
var result = 1=='1';
console.log(result);
console.log(`Why result is true because their is implicit conversion from boolean value true to string 'true'`);
   