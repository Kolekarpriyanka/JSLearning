function squareOfWordlength(str)
{
   var squ =str.length;
   console.log(`Given Word is "${str}"  Length of word :- ${squ}`);
   var result =squ*squ;
   return result;

}

var r1 =squareOfWordlength("Java script");
console.log(`Square of lenght  :- ${r1}`);

var r1 =squareOfWordlength("Google Chrome");
console.log(`Square of lenght  :- ${r1}`);

var r1 =squareOfWordlength("Developer Smart");
console.log(`Square of lenght  :- ${r1}`);

console.log(`---------------------------------------------------------------------------`);

var square=function (){
    var res= "i am angular Developer"
    console.log(`Given String is :-${res}`);
   var lg =res.length
    console.log(`String length is ;-${lg}`);
   var c =res.split(" ")
//    console.log(c);
   var splitlg =c.length
   console.log(`Word length is ;-${splitlg}`);
   var result =lg/splitlg
   console.log(`2.1)Result :-${result}`);
   var result2 =lg*splitlg
   console.log(`2.2)Result :-${result2}`);
}

square()