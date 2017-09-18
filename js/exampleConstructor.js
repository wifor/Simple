function User(pName, pAge) {
    this.age = pAge;
    this.name = pName;

    this.displayInfo = function () {
        document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br/>")
    }

    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.cName + "<br/>");
    };
}

function Car (pName, pYear) {
    this.cName = pName;
    this.cYear = pYear;
    
    this.carInfo = function () {
        document.write("Модель: " + this.cName + "  Год выпуска: " + this.cYear + "<br/>");
    }
}

var tom = new User('Tom', 24);
tom.displayInfo();
var bently = new Car('Bently', 2005);
    tom.driveCar(bently);
