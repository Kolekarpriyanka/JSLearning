let personDetails={
    Name:"Priyanka kolekar",
    Address:"Sangola",
    Email:"nikitakolekar12345@gmail.com",
    Country:"India"
}
let collegeDetails={
    college:"shree Ramchandra College",
    Degree:"BE(electronics engineer)",
    city:"Pune",
    University:"Pune"
}
let mergedObject= Object.assign({},personDetails,collegeDetails);
console.log( mergedObject);
let array=["Suresh","Laxmi","Pravin","Pooja","Sonal"];
let a=Object.freeze(array)
console.log(a);
for(const element of array){
    console.log(element);
}
console.log(`---------------------------`);
let  reverse =" ";
let str ="Codemind Technology";
let res =str.slice (0,8);
console.log(res);
let result=str.slice(9);
for (var index = result.length-1; index >=0; index--) {
    const char = result.charAt(index);
    reverse=reverse.concat(char);
}
console.log(`The expected output:${reverse}`);
let res1=res.concat(reverse);
console.log(res1);