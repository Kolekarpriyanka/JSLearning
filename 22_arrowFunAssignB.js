class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// Problem 1: Employees working in 'TCS'
console.log("Employees working in 'TCS':");
arrayEmployees.forEach(employee => {
  if (employee.emp_company === 'TCS') {
    console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
  }
});

console.log(`------------------------------------------------`);

// Problem 2: Employees in the 'Finance' department
console.log("'Finance': Department Employees");
arrayEmployees.forEach(employee => {
    if (employee.emp_dept === 'Finance') {
        console.log(`Employee name: ${employee.emp_name}, Deparment: ${employee.emp_dept}`);
    }
} )

console.log(`------------------------------------------------`);

// Problem 3: Employees whose name starts with 'R'
console.log("\nEmployees whose name starts with 'R':");
arrayEmployees.forEach(employee => {
    if (employee.emp_name.startsWith("R")) {
        console.log("Employee Details:", employee);
    }
});

console.log(`------------------------------------------------`);

// Problem 4: Employees with salary greater than 75000
console.log("\nEmployees with salary greater than 75000:");
arrayEmployees.forEach(employee => {
  if (employee.emp_salary > 75000) {
    console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
  }
});

console.log(`------------------------------------------------`);
// Problem 5: Employees with salary >= 50000 and from 'IT' department
console.log("\nEmployees with salary >= 50000 and from 'IT' department:");
arrayEmployees.forEach(employee => {
  if (employee.emp_salary >= 50000 && employee.emp_dept === 'IT') {
    console.log("Employee Details:", employee);
  }
});

// Problem 6: Employees from company 'Infy'
console.log("\nEmployees from company 'Infy':");
arrayEmployees.forEach(employee => {
  if (employee.emp_company === 'Infy') {
    console.log("Employee Details:", employee);
  }
});