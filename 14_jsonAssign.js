let jsonDetails = `
{
"name": "Aleix Melon",
"id" : "E00245",
"role": ["Dev", "DBA"],
"age" : 23,
"doj" : "11-12-2019",
"married" : false,
"address" : {
      "street": "32, Laham St.",
      "city" : "Innsbruck",
      "country" : "Austria"
},
"referred-by": "E0012"
}
`
// console.log(jsonString);

const employeeObj = JSON.parse(jsonDetails);

// Log role as 'DEV'
console.log("Role:", employeeObj.role[0].toUpperCase());

// Extract last name and log it
const fullNameParts = employeeObj.name.split(" ");
const lastName = fullNameParts[1];
console.log("Last Name:", lastName);

// Extract and log joining year
const dojParts = employeeObj.doj.split("-");
const joiningYear = dojParts[2];
console.log("Joining Year", joiningYear);