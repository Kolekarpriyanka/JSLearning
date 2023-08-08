let bankSbi = {
    bankName: 'SbiBank',
    location: 'pune',
    accountNo: '99802514586935',
    ifsc: 'SbISBIN0000304',
    interestRate: '6 %',
}

let bankLocation = {
    street: "Fergusson College Rd",
    landmark: "near Dhyaneshwar Paduka Chowk",
    city: "Shivajinagar ,Pune",
    pin:  411004, 
}

//===============================
let bankSbiCopy = {
    
}

let bankLocationCopy = {
     
}


console.log("-----------------------------------------------------------------");
console.log(`1. create the object → 'bankSbi'  `)
console.log(bankSbi);

console.log("-----------------------------------------------------------------");
console.log(`2. create the object → ''bankLocation'  `)
console.log("-----------------------------------------------------------------");
console.log(bankLocation);

console.log("-----------------------------------------------------------------");
console.log(`3.Clone the "bankSbi" and "bankLocation" objects using Object.assign() `)
console.log("-----------------------------------------------------------------");

 var copysbi =Object.assign(bankSbiCopy, bankSbi);
 console.log(`3.A clone all data of bankSbi into bankSbiCopy :- `);
 console.log(copysbi);

 var copybankLocation =Object.assign(bankLocationCopy, bankLocation);
 console.log(`3.B clone all data of bankSbi into bankLocationCopy :- `);
 console.log(copybankLocation);


 console.log("-----------------------------------------------------------------");
 console.log(`4.Create the object using literals → rateOfInterest with properties `)
 console.log("-----------------------------------------------------------------");

 let rateOfInterest  = {
    homeLoanInterest: '13%',
    personalLoanInterest: '12%',
    duelnterest: '10%',
  
}

console.log(rateOfInterest);

console.log("-----------------------------------------------------------------");
console.log(`5.Merge the step 1, step 2 and step 4 objects into new object namely → sbiDetails `)
console.log("-----------------------------------------------------------------");

// let sbiDetails  = {
    
// 
console.log(`Merge all object(bankSbi, bankLocation, rateOfInterest ) in "sbiDetailss" `);
const sbiDetails = Object.assign({ }, bankSbi, bankLocation ,rateOfInterest); 
console.table(sbiDetails);


console.log("=================================================================");
console.log(`6.Traversing an Object `)
console.log("-----------------------------------------------------------------");
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}