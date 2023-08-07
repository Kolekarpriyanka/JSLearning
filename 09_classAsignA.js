class Vehicle {
    Model;
    Type;
    Company;
    color;
    Number;
    constructor(modelName,type,companyName,colorN,number){
        this.Model=modelName;
        this.Type=type;
        this.Company=companyName;
        this.color=colorN;
        this.Number=number;

    }
    show(){
        console.log(`Vehicle Details:Vehicle Name is:${this.Model},Vehicle type is:${this.Type},Company Name is:${this.Company},Vehicle color is:${this.color},Vehicle No:${this.Number}`);
}}
let hondaBike= new Vehicle("Honda Bike","Two Wheeler","Honda","Black","Mh-AQ2345");
let heroBike= new Vehicle("Shine","Two Wheeler","Hero","Red","GJ-AE7645");
let bajajBike=new Vehicle("Pulser","Two Wheeler","Bajaj","Blue","Mh-WX2355");
let bmwVehicle=new Vehicle("BMW","Four Wheeler","BMW","Black","MH-AS2345");
const array=[hondaBike,heroBike,bajajBike,bmwVehicle];
for (const Vehicle of array) {
    Vehicle.show();
}
console.log(`---------------------------------------------------------------------------`);
class College{
    College;
    Location;
    Grad;
    Email;
    constructor(collegeName,collrgeLocation,NAACgrade,email){
        this.College=collegeName;
        this.Location=collrgeLocation;
        this.Grad=NAACgrade;
        this.Email=email;
    }
    display(){
        console.log(`Name Of College:${this.College},Location:${this.Location},NAAC Grade:${this.Grad},Email:${this.Email}`);
    }
}
let college1=new College("SRCOE College","Pune","A+","shree@123");
let college2=new College("MIT College","Mumbai","A+","mit@123");
let college3=new College("SKN Singhgad College","Korti","A+","Priya@123");
let college4=new College("SVERI collage","Pandharpur","A+","abc@123");
college1.display();
college2.display();
college3.display();
college4.display();
console.log(`----------------------------------------------`);
let traverseobject=function(object){
    for(const key in object){
        if(object.hasOwnProperty.call(object,key)){
            const element=object[key];
            console.log(`${key}:-${element}`);
        }
    }
}
traverseobject(college1);
console.log(`------------------------------------`);
traverseobject(college2);
console.log(`------------------------------------`);
traverseobject(college3);
console.log(`-------------------------------------`);
traverseobject(college4);
