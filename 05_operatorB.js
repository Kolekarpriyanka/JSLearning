

console.log(`========================================================Assigement B=====================================================`);

var greaternumber= function(num1,num2){
   var result= (num1>num2)? num1:num2;
   console.log(`Greather Number Between ${num1} and ${num2} is ${result}`);
}
greaternumber(10,-10);
greaternumber(800,899);

console.log(`----------------------------------------------------------Step 2--------------------------------------------------------`);

var isEvenOrOddNum= function(num){
   var result= (num%2==0)? 'true' : 'false';
   return result;
}
var result=isEvenOrOddNum(29);
console.log(`Given number is '29' is Even : ${result}`);
var result=isEvenOrOddNum(44);
console.log(`Given  umber is 44 is Even : ${result}`);
var result=isEvenOrOddNum(0);
console.log(`Given  umber is 0 is Even : ${result}`);
var result=isEvenOrOddNum(101);
console.log(`Given  umber is 101 is Even : ${result}`);

console.log(`----------------------------------------------------------Step 3--------------------------------------------------------`);

var wordLength= function(str){
    var strLength=str.length;
    var result=(strLength%2==0)? `EVEN`:`ODD`;
    console.log(`${str} has ${result} lenth`);
}
wordLength(`JavaScript`);
wordLength(`Developer`);
wordLength(`Google`);