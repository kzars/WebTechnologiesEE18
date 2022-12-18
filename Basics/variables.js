// Boolean

var data = false;

if(data){
    console.log("Booleans rule!");
}else{
    console.log("Booleans are lame.");
}

// Numbers

var num1 = 40;
var num2 = 3.6;
console.log(num1 + num2);

//String

var name = "Karlis";
console.log("Hi! My name is ".name);

// null 
var n = null;
console.log(n * 32);

//undefined
var a;
console.log(a + 2);

//Object

// Example 1

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    married: true
}

console.log(person.firstName);
console.log(person["firstName"]);

// Example 2
var myCar = new Object();
myCar.brand = "Ford";
myCar.color = "Grey";

console.log(myCar.brand);

// Reference type
let x = 10;
let y = x;
x = 20;

console.log('y = '+ y);
console.log('x = ' + x);

let xObject = {value: 10};
let i = xObject;

xObject.value = 20;

console.log('i = '+ i.value); // 10
console.log('xObject = ' + xObject.value); //10

console.log(typeof 50); // number
console.log(typeof "Lorem ipsum");// string
console.log(typeof []);// object
console.log(typeof function() {});// function

let firstName = "Bob";
let age = 50;
let student = true;

console.log("Hello ", firstName);
console.log("You are ", age, " years old");
console.log("Student: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Student " + student;