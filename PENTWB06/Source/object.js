
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function(){
        return 5000;
    },
    printDescription(){
        console.log(this.make + '' + this.model);
    }
}

car.printDescription();
console.log(car.year);

// console.log(car['year']);
// console.log(car[1]);

// var anotherCar = {};
// anotherCar.whathever = 'bob';
// console.log(anotherCar.whathever);

// var a= {
//     muProperty: {b: 'hi'}
// };

// console.log(a.muProperty.b);

/*
var c = {
    muProperty: [
        {d: 'this'},
        {e:'can'},
        {f:'get'},
        {g: 'crazy'}
    ]
};
*/

let carLot = [
    {year: 2017, make : 'Toyota', model:'4runner'},
    {year: 2015, make : 'BMW', model:'5281'},
    {year: 1982, make : 'Buick', model:'Skylark'}
]

let contacts= {
    customers: [
        {
            firstName: 'Bob', lastName: 'Tabor', phoneNUmbers: ['1214134', '3543634'],
            firstName: 'Richard', lastName: 'Boughton', phoneNUmbers: ['357856', '09896']
        }
    ],
    employees:[
        {
            firstName: 'Steve', lastName: 'Jaworski', phoneNUmbers: ['153', '354654753634'],
            firstName: 'Conrad', lastName: 'Tabor', phoneNUmbers: ['254465', '2343'],
            firstName: 'Grant', lastName: 'Tabor', phoneNUmbers: ['18666', '237890']
        }
    ]
}