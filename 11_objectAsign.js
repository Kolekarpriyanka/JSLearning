const array=[20,3,4,56,90,400,49];
const a1=[20,3,4,56,90,400,49];
a1.push(55,66);
console.log(`---------------------------------------------------------------------------`);
console.log(`orginal array :${array}`);
console.log(`---------------------------------------------------------------------------`);
console.log(`cloned and Updated array:${a1}`);
console.log(`---------------------------------------------------------------------------`);
let a3=array.push(10,25);
console.log(`Updated orignal array: [${array}]`);
console.log(`---------------------------------------------------------------------------`);
let clone=[...array,...a1];
console.log(clone);
console.log(`---------------------------------------------------------------------------`);
arrayEven = [2, 30, 14, 8]
margearray = [...arrayEven, clone]
console.log(`merge array is :-[${margearray}]`)

const employee_info = {
    emp_id: 27,
    emp_name: 'John Doe',
    salary: {
      july_month: '40,0000 INR',
      aug_month: '50,0000 INR',
      jun_month: '65,0000 INR',
    },
    address: {
      locality: {
        colony: 'OM Vrindavan Society',
        street: 'Kanch Pokli, 431202',
      },
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
    mobiles: ['+91 8600 3456 88', '1800- 4567 32', '+91- 9096 5678 77'],
  }
// let month=JSON.parse(JSON.stringfy(employee_info));
const month=JSON.parse(JSON.stringify(employee_info));
console.log(`---------------------------------------------------------------------------`);
month.salary.july_month="80,000INR";
console.log(`Salary of original object:  ${employee_info .salary.july_month}`);
console.log(`Salary of cloned object:  ${month.salary.july_month}`);
console.log(`---------------------------------------------------------------------------`);
employee_info.address.country= 'United Kingdom';
     
   
console.log(`Employee country of original object:  ${employee_info.address.country}`);
console.log(` Employee country of cloned object:  ${month.address.country}`);
