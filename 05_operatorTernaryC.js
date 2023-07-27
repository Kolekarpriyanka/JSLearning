console.log(`-------------------------- step1----------------------------`);
function maleMarriageEligibility(gender, age, boyName) {
  var boyEligibility = (gender = "Male" && age >= 21)
    ? "You are eligible for marriage"
    : "You are not eligible for marriage";
    console.log(`Hey  ${boyName},${boyEligibility}`);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log(`-------------------------- step2 ----------------------------`);
function girlMarriageEligibility(gender , age , girlName){
    var girlEligibility = (gender = "Female" && age >= 18)
    ? "You are eligible for marriage"
    : "You are not eligible for marriage";
    console.log(`Hey ${girlName}, ${girlEligibility}`);
}
girlMarriageEligibility("Female" , 16 , "Jenifer")
girlMarriageEligibility("Female" , 27 , "Malinda Gates")

