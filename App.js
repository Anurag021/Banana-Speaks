
// var UserName = prompt("Enter your name");
// alert ("the name of the user is - "+ UserName) 

//Query-Selector
var txtInput = document.querySelector("#txt-area")
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output")
 
//how to intract with the app is by using the event listner, they are click  scroll
// Event Listner for Click

// var inner = outputBox.innerText;
// console.log(inner)

function clickHandler(){

    console.log("Clicked");
    console.log("input:", txtInput.value);
    outputBox.innerText = "Translated Text is "+ txtInput.value;
}

btnTranslate.addEventListener("click",clickHandler)
