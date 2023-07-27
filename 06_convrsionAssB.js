console.log(`----------------Assignment 2........................`);
result=0=='';
console.log( ` 1) Result is ${result} , type of result is :${typeof result}`);
console.log(`because  we use===operator in string  data type it convert into number`);

result=0=='0';
console.log(` 2)Result is ${result} , type of result is :${typeof result}`);
console.log(`because  we use===operator in string  data type it convert into number`);
result=0=='false';
console.log(` 3)Result is ${result} , type of result is :${typeof result}`);
console.log(`because  we use===operator in boolean data type it convert into number`);
console.log(`...................................`);
result=null=='undefined';
console.log(`4) Result is ${result} ,type of result is :${typeof result}`);
console.log(`because of value is null its empty `);

result=1=='[1]';
console.log(  ` 5)Result is ${result} ,type of result is :${typeof result}`);
console.log(` Beacuase of same value 1 and 1`);

result=1=='true';
console.log(`6)Result is ${result} , type of result is :${typeof result}`);
console.log(`Because of we use == operator on string data it convert into number`);

result=1=='1';
console.log( `  7)Result is ${result} ,type of result is :${typeof result}`);
console.log(`Because of same value 1 and 1`);
