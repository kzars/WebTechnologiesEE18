//Creating a function with to input arguments
function multiply(p1,p2){
    return p1 * p2;
}

// Calling a function
console.log(multiply(10,20));

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit -32);
}

document.getElementById("p2").innerHTML = toCelsius(document.getElementById('p1').innerHTML);