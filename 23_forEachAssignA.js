console.log(`--------------step1-------------`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach( (currentValue,index) => {
    console.log(`Array Element:${currentValue},index:${index}`);
});
console.log(`---------------step2------------------`);
arrayNumbers.forEach( (currentValue,index)=>{
    if (currentValue>0) {
        console.log(`Positive Numbers in Array:${currentValue}`);
    }
})
console.log(`------------step3------------------`);
const arrayNew=[10,-20,30,-40,-50];
arrayNew.forEach((numbers)=>{
    if(numbers<0){
        console.log(`New array Negative numbers is:${numbers}`);
    }
})
console.log(`-------step4-------------`);
arrayNumbers.forEach((num)=>{
    if (num%2==0) {
        console.log(`Even numbersin Array is:${num}`);
    }
})
console.log(`------------------step5---------------`);
let sum=0;
arrayNumbers.forEach((currentValue)=>{
    sum+=currentValue;
})
console.log(`Addition of array element is:${sum}`);
console.log(`-----------step6-------------`);
arrayNumbers.forEach((value,index)=>{
    if (index%2==0) {
        console.log(`Even indexed Array value is:${value}`);
    }
})