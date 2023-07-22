console.log(`               **Assignment-2**                                             `);
console.log(`-------------------_Step-1__---------------------------------------------------`);//step 1
console.log("     Hey you are doing good, keep it up       ");
console.log(`-------------------_Step-2__-------------------------------------------------------`);//step 2
function stringHandsOn() {
    var str="     Hey you are doing good, keep it up      ";
    var mainStr=str.length;
    console.log(`Length Of String is : ${mainStr}`);
    console.log(`-------------------_Step-3__-------------------------------------------------------`);//step 3
    var spaceTrim=str.trim();
    var afterTrim=spaceTrim.length;
    console.log(`After Trim Length Of String is : ${afterTrim}`);
    console.log(`-------------------_Step-4__-------------------------------------------------------`);//step 4
    var extraSpaceCount=mainStr-afterTrim;
    console.log(`Total Number Of Extra Spaces is : ${extraSpaceCount}`);
    console.log(`-------------------_Step-5__-------------------------------------------------------`);//step 5
   var startchar= spaceTrim.charAt(0);
   console.log(`The First Character of string is : ${startchar}`);
   var endcha=spaceTrim.length-1;
   var endchar=spaceTrim.charAt(endcha);
   console.log(`The Last Character of string is : ${endchar}`);
   console.log(`-------------------_Step-6__-------------------------------------------------------`);//step 6
   var totalnumberofWord=spaceTrim.split(' ');
   var totalnumberofWordCount=totalnumberofWord.length;
   console.log(`The Total Number of Word is : ${totalnumberofWordCount}`);
   console.log(`-------------------_Step-7__-------------------------------------------------------`);//step 7
   var goodIndex= spaceTrim.indexOf('good');
   console.log(`The Index Of Word "good" is : ${goodIndex}`);
   console.log(`-------------------_Step-8__-------------------------------------------------------`);//step 8
    var after22=spaceTrim.slice(22);
    console.log(`Substring Starting From "22" is : ${after22}`);
    console.log(`-------------------_Step-9__-------------------------------------------------------`);//step 9
  var wordEndWith = spaceTrim.endsWith("up");
 console.log(`String is EndsWIth "up" : ${wordEndWith}`);
 console.log(`-------------------_Step-10__-------------------------------------------------------`);//step 10
 var wordStartWith = spaceTrim.startsWith("Hey");
 console.log(`String is StartsWIth "Hey" : ${wordStartWith}`);
 console.log(`*******************************`);

}
stringHandsOn();