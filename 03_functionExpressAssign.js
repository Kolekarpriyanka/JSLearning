console.log(`..............step1.................`);
var square=function (num){
var res= num*num;
console.log(`the square  is :${res}`);
   }
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(`------------------step2------------------`);
    console.log( ` type of square is:`,typeof square);
console.log("------------------------step3-----------------------------------------")
   var area= function(num1, num2){
    var result = num1* num2;
    console.log(`Area of reactangle is: ${result} `);
}
area (499, 917);
console.log("------------------------------ step4------------------------------------")
console.log("Swapping using Two Values");
var mahi = "mahi";
var raina = "raina";
console.log(`Before Swap:-`,'mahi:-',mahi, 'raina:-',raina);
var temp = mahi;
mahi=raina;
raina=temp;
console.log(`After Swap:-`,'mahi:-',mahi, 'rina:-',raina);

var num1=55;
var num2=77;
console.log(`Before swap:-`,`num-1`,num1, `num-2`,num2);
var temp =num1;
num1=num2;
num2=temp;
console.log(`after swap:-`,`num-1`,num1 ,`num-2`,num2);
console.log(`-------------------------------------------------------`);
var wordCount = function(word){
    var words = word.split(" ") ;
    var wordCount  = words.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
 }
 var result = wordCount(" Js is the most popular language of internet ");
 console.log(`Total word count is: ${result}`);  
console.log(`--------------------step 5---------------------------`);

const stringOperations = function (str) {
  
   const totalCharacters = str.length;
 
   
   const charAtIndex6 = str.charAt(6);
 
 
   const charAtIndex11 = str.charAt(11);
   const lastCharacter = str.charAt(str.length - 1);
 
  
   const firstCharacter = str.charAt(0);
 
   const thirdLastCharacter = str.charAt(str.length - 3);
 
  
   const words = str.split(" ");
   const totalWords = words.length;
   const squareOfTotalWords = totalWords * totalWords;
 
   console.log("A. Total characters:", totalCharacters);
   console.log("B. Character at index 6:", charAtIndex6);
   console.log("C. Character at index 11:", charAtIndex11);
   console.log("D. Last character:", lastCharacter);
   console.log("E. First character:", firstCharacter);
   console.log("F. Third last character:", thirdLastCharacter);
   console.log("G. Square of total words:", squareOfTotalWords);
 };
 
 stringOperations("JS the most popular language of the internet");