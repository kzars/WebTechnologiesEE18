$(function(){
   $('.button-container-1').on("click",func1) 
})

function func1(){
    $('body').toggleClass("body-color");
    $('.button-container-1').toggleClass("button-container");
    $('h1').toggleClass('text');
    $(".button-1").toggleClass("button");
}