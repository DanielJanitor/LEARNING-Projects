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
const Companies = [{
        name: 'IBM',
        empoyes: 2000,
        location: 'Berlin',
        category: 'IT'
    },
    {
        name: 'AT&T',
        empoyes: 150,
        location: 'Kosice',
        category: 'Retail'
    },
    {
        name: 'T-Systems',
        empoyes: 1500,
        location: 'Bratislava',
        category: 'IT'
    },
    {
        name: 'NESS',
        empoyes: 3500,
        location: 'Bon',
        category: 'Finance'
    },
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
// console.log(sortedCompaniesOld);

//Arrow function
const sortedComanies = Companies.sort(company => company.empoyes);
// console.log(sortedComanies);

//05. REDUCE
//old way
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
// console.log(ageSum);
//ES6
ageSum = ages.reduce(function (total, age) {
    return total + age;
})
//Arrow function
ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);


//get total years of empoyes

const empoyesCompanies = Companies.reduce((total, empoyes) => total + empoyes.empoyes, 0);
// console.log(empoyesCompanies);

// Combine methods

const combine = ages
    .map(age => age * 2)
    .filter(age => age => 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)

console.log(combine);

const houses = [{
        id: 1,
        isBuild: true
    },
    {
        id: 1,
        isBuild: true
    },
    {
        id: 1,
        isBuild: false
    }
];

console.log(houses);

const buildedHouses = houses.filter(function (house) {
    return house.isBuild;
})

console.log(buildedHouses);


//Arrow function with This

const person = {
    talk() {
        setTimeout(() => {
            console.log('this', this);
        }, 3000);

    }
}

// person.talk();


//Arrow function with MAP

const colors = ['red', 'orange', 'blue'];
const selected = colors.map(color => `<li>${color}</li>`);
console.log(selected);


//Object Descructuring

const generalObject = {
    street: '',
    city: '',
    country: ''
};

//old way
// const street = generalObject.street;
// const city = generalObject.city;
// const country = generalObject.country;

const {
    street,
    city,
    country
} = generalObject;
console.log(generalObject);

//Spred operators

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

//old way
const combineArrays = firstArray.concat(secondArray);
console.log(combineArrays);
//ES6 way
const combineEs6 = [...firstArray, ' and ', ...secondArray];
console.log(combineEs6);
const cloneFirst = [...firstArray]
console.log(cloneFirst);

const info1 = {
    name: 'Daniel'
};
const info2 = {
    age: 34
};

const info3 = {
    ...info1,
    ...info2,
    location: 'Slovakia'
};

console.log(info3);


