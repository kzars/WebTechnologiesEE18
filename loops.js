//For loop
for(let i = 0; i < 3; i++){
    console.log(i);
}

// For each loop
let arr = [1, 2, 3];
arr.forEach(function (element , index) {
    console.log("Element with Index " + index + " has value " + element)
});

// For in loop
let letters = ["H","E","L","L","O"];

for(let i in letters){
    console.log(letters[i]);
}

let Car ={
    brand: "Chevy",
    model: "Corvette",
    year: 1997,
    color: "blue"
}

for(let property in Car){
    console.log(Car[property]);
}

// While

let i = 0
let text;
while (i < 10) {
    text += "The number is " + i;
    i++;
    console.log(text);
  }

  i = 0;
  do {
    text += "The number is " + i;
    i++;
    console.log(text);
  }
  while (i < 10);
