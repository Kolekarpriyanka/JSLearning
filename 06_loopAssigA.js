console.log("-----------------------------------------------------------------");
console.log(" ----------------1.Count the total number vowels---------------- ");
console.log("-----------------------------------------------------------------");

var str = "I am very good IT Developer";
console.log(`Given String ${str}`);
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
    char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        // console.log(char);
        count++;
    }
}
console.log(`Count total vowels: ${count}`);

console.log("-----------------------------------------------------------------");
console.log("------------------------------2.cube of no-----------------------");
console.log("-----------------------------------------------------------------");



function sum(){
    var a  = 0 ;
    for (let index = 1; index <=5; index=index+1) { 
        var result =(index * index * index); 
        console.log(`Cube is ${index} is :- ${result}`);
       var  a = a+result;
      
    }
    console.log( ` sum of all cube no 1 to 5 is :-  ${a}`);
 }
 
sum();



console.log("---------------------------------------------------------------------");
console.log("-----3.odd positioned chars and do not consider empty spaces---------");
console.log("----------------------------------------------------------------------");

 function oddPositionedChars(str){
    var reverseString = "";
for( let index = 0 ;index < str.length; index++){
    // console.log(str.charAt(index));
    if(  index%2 == 1 && str.charAt(index) !== " " ){               //
        var char =(str.charAt(index));
        // console.log(char);
     reverseString = reverseString.concat(char); 
    }

         
     }
     console.log(`Given String is ;= "${str}"`);
     console.log(`odd position char := ${reverseString}`);
}
oddPositionedChars("Hard work always pays back");
console.log("----------------------------------------------------------------");
oddPositionedChars("Soon I will be Angular IT Champ")