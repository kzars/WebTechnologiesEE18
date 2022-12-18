function displayText(){
    console.log("You clicked on the button");
    alert("You have 5 minutes to get out of your house");
    //document.getElementById("btn1").removeEventListener("click",displayText);
}

function hover(){
    console.warn("You are hovering over button");
}

document.getElementById("btn1").addEventListener('click',displayText);
document.getElementById("btn1").addEventListener("mouseover",hover);


//Function for changing text
function modifyText(){
    const t2 =  document.getElementById("t2");
    console.log(t2.innerHTML === "2");
    const isValueTwo = t2.innerHTML === "2";
    // if(isValueTwo){
    //     t2.innerHTML = "3";    
    // }else{
    //     t2.innerHTML = "2";
    // }
    t2.innerHTML = isValueTwo ? "3" : "2";


}


//Adding event listener to table
document.getElementById("outside").addEventListener("click", modifyText)