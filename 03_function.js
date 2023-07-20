

   function swap( n1,n2){ //n1,n2 arguments  or parameters
    console.log('Inside swap function');
    console.log( 'Before swap=>n1',n1 ,"n2",n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log( 'After swap=>n1',n1 ,"n2",n2);
}
var num1=100;
var num2=200;
swap( num1,num2);//function call invocation
var sweety="Sweety";
var cutey="cutey";
swap  ( sweety,cutey);

console.log('End of porgram');