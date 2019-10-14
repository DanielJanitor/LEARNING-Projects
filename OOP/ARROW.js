//
//      ARROW FUNCTIONS WITH ORDER METHODS ES6
//

//before ES6
const square = function (number) {
    return number * number;
}
console.log(square(5));


//Arrow functions
//0 paramenters
const carInfo = () => `This is info about car`;

//One paramenter
const houseLocation = location => `Location of this house is ${location}`;

//Two parameters
const calculation = (a, b) => `This is width ${a} and this is length ${b}`;

console.log(calculation(8, 20));
console.log(carInfo());
console.log(houseLocation('Zamutov'));


//Methods with arrow functions filter / map / reduce / sort
const Companies = [
    {name: 'IBM',empoyes: 2000,location: 'Berlin',category: 'IT'},
    {name: 'AT&T',empoyes: 150,location: 'Kosice',category: 'Retail'},
    {name: 'T-Systems',empoyes: 1500,location: 'Bratislava',category: 'IT'},
    {name: 'NESS',empoyes: 3500,location: 'Bon',category: 'Finance'},
];

const ages = [15, 25, 84, 78, 68, 47, 54, 1, 25, 47, 6, 19, 47, 58, ];

//01. forEACH - easy way for loop trought array (for/while)
//OLD way
for (let i = 0; i < Companies.length; i++) {
    console.log(Companies[i]);
}
//forEach
Companies.forEach(function (company) {
    console.log(company.name);
})
//for Each Arrow
const companyList = Companies.forEach(company => company.name);


//02. Filter - easy way for loop trought array and filter via ifs
//OLD way
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        canDrink.push(ages[i])
    }
}
console.log(canDrink);
// Filter
let canDrinkAlcohol = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})
console.log(canDrinkAlcohol);
//Filter Arrow
let canNotDrink = ages.filter(age => age < 18);
console.log(canNotDrink);

const iTCompanies = Companies.filter(company => company.category === 'IT')
console.log(iTCompanies);

//03.MAP - select objects from array
const CompanyNames = Companies.map(company => company.name);
console.log(CompanyNames);


//04. SORT
//Old way
const sortedCompaniesOld = Companies.sort(function (c1, c2) {
    if (c1.empoyes > c2.empoyes) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sortedCompaniesOld);

//Arrow function
const sortedComanies = Companies.sort(company => company.empoyes);
console.log(sortedComanies);