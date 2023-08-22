

console.log(`----------------------1------------------------------`);


let arrowFun =  ()=> {
    console.log("Good Morning, Today is Tuesday");
}
arrowFun();

console.log(`----------------------2------------------------------`);

let multiply = (num1,num2,num3=1)=> {
    let result = num1 * num2* num3;
    console.log(result);
}
multiply(5,5,2);
multiply(10,4)

console.log(`----------------------3------------------------------`);

let add = (num1,num2,num3,num4,num5) =>{
let result = num1 + num2 + num3 + num4 + num5;
console.log(result);
}
add(100,100,200,349,756);

const value = ["I am", "learning", "ES6", 'features', "in depth"];
const result = add(...value);