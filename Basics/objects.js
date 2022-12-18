// Literals

const person={
    firstName: "John",
    lastName: "Deer"
}

console.log(person.firstName);

//Object constructor
const car = new Object();
car.brand = "BMW";
car.model = 6;

console.log(car.model);

//Constructor function
function House(address, rooms){
    this.address = address;
    this.rooms = rooms;
}

const house1 = new House("London", 4);
const house2 = new House("Paris", 3);

console.log(house1.address);

