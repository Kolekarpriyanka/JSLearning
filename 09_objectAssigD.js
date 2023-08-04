let professor = {
   
    sub: "Angular",
    height: "6feet",
    city: "Pune",
    age: 54,
    isMarried: true,
    degrees: {
         engineering: 'CSC',
         PHD: 'Adv Computing',
         M_Tech: ` Advance Electronic`,
    },
    certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
     mydegree: function()  {
        let details = `Teacher total degrees are :-${professor.degrees.engineering},${professor.degrees.PHD}`;
        return details;
    

     }
}

console.log("=================================================================");
console.log(`1. object  with 5 proerities  `)
console.log(professor);

console.log("=================================================================");
console.log(`2. nested object 'degrees added  `)
console.log(professor.degrees);

console.log("=================================================================");
console.log(`3. Add one array `)
console.log(professor.certificates);

console.log("=================================================================");
console.log(`4. Add function as a value which should concat all degrees`);
const abc=professor.mydegree();
console.log(abc);

console.log("=================================================================");
console.log(`5. Try to add new property like total Experience: 14 years" and log on console`);

professor.totalExperience = "14Year";
console.log(`  Expernice :-${professor.totalExperience}`);

console.log("=================================================================");
console.log("6. Modify any existing property and log complete object on console");
professor.degrees.engineering= "Entc"
console.log(`  Cnanged Engg degree ;- ${professor.degrees.engineering}`);

console.log("=================================================================");
 console.log(`7. Add one new certificate → "Oracle Certified" at the end of array → certificates`);
// professor.certificates[3]= "Oracle Certified";
professor.certificates.push("Oracle Certified");
console.log(` "updated array after add certificates ==>Oracle Certified" `);
console.log(professor.certificates);
console.log("=================================================================");
 console.log("8. Log the last element of the array certificates.");
 console.log(professor.certificates[3]);