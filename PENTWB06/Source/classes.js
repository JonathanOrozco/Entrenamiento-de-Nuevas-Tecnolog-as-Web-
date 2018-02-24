class Car{
        constructor(make, model, year){
            this.make = make;
            this.model= model;
            this.year = year;
        }

        print(){
            console.log(`${this.make} ${this.model} ${this.year}`);
        }
}

let myCar = new Car('bmw', '745li', 2010)
myCar.print();

/* let car = class{

} */

class SportsCar extends Car{
        revEngine(){
            console.log('Vrrrrrrom goes the ' + this.model);
        }
}

let mySoprtCar = new SportsCar('dogde', 'viper', 2011);
mySoprtCar.print();

