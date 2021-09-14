
// var UserName = prompt("Enter your name");
// alert ("the name of the user is - "+ UserName) 


// var btnTranslate = document.querySelector("#tanslate-Button");

// btnTranslate.addEventListener("click", function clickHandler(){
//     console.log("clicked!");

// })
var txtInput = document.querySelector("#txt-area")
var btnTranslate = document.querySelector("#btn-translate");
// query selector is used to connect button reference with JS file
 
//how to intract with the app is by using the event listner, they are click  scroll
// 

btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("Clicked")
    console.log("input:", txtInput.value);
})
