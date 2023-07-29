console.log(`..............................Assignment -2................................`);
function marraigeEligiblity( gender,age){
    
if (gender==  "male" && age>=21) {
    console.log(` Gender is:${gender},age is:${age} , You are Eligible for marriage` );
    
} else if(gender== "female" &&  age>=18) {
        console.log(` Gender is :${gender},age is:${age} , You are Eligible for marriage` );
    } 
    else {
        console.log(` Gender is:${gender},age is:${age} , You are  not Eligible for marriage` );
    }
}marraigeEligiblity("male",17);
marraigeEligiblity("male",25);
marraigeEligiblity("female",28);
marraigeEligiblity("female",16);
marraigeEligiblity("other",35);
marraigeEligiblity("other",41);