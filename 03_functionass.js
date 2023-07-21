function fun(){
    console.log('My name is Priyanka');
    console.log('My current city is pune');
    console.log('------------------------------------------------------------------');
}
fun();

function personalDetails(fname, lname, cname){
    console.log('First Name-:',fname, 'Last Name-:',lname, 'College Name-:',cname);
    console.log('-------------------------------------------------------------------');
}
personalDetails('Priyanka','Kolekar','SRCOE PUNE');
function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200
    console.log('Inside swap function');
    console.log('Before Swap=> n1', n1, " n2", n2 );
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1', n1, " n2", n2 );
    console.log('--------------------------------------------------------------------');
}
var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);

var num1 = 1000;
var num2 = 2000;
swap(num1, num2);

function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
    console.log('---------------------------------------------------------------------');
}
var res = addition(10.23, 600, 40);
console.log('Addition is ', res);

var result =addition('Hello', 'Good','Morning');
console.log('Addition is ', result);

function bankDetails(bankName,accountNo,city,pinCode){
    console.log('-----------Bank Details------------');
    console.log('Bank Name-',bankName, 'Account No- ',accountNo,'City',city,'Pin Code',pinCode);
}
bankDetails('CITI Bank',3456782345,'Pune',431202);
bankDetails('Axis Bank',7856782345,'Mumbai', 441202);
bankDetails('HDFC Bank',8956782345,'Pune',631202);