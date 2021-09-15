//Query-Selector
var txtInput = document.querySelector("#txt-area")
var btnTranslate = document.querySelector("#btn-translate");
var outputBox= document.querySelector("#output");


// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url ="https://api.funtranslations.com/translate/minion.json"

function createURL(text){
    return url + "?text="+ text;
}

// another short way of making a server request and get the response processin part
function doFetch(text){
    fetch(createURL(text))
    .then (response => response.json())
    .then (json=> {
        var translatedText = json.contents.translated  //fetching response from json
        outputBox.innerText = translatedText   // showing the response in output box -- output
       
    }).catch(errorHandler)
}
//error handler
function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server try again after sometime")
}

//how to intract with the app is by using the event listner, they are click  scroll
// Event Listner for Click
btnTranslate.addEventListener("click",clickHandler)

function clickHandler(){

    console.log("Clicked");
    console.log("input:", txtInput.value);

    doFetch(txtInput.value);
}
//fetch response from serer and get the json response and return the text from json response
// function doFetch(text){
//     fetch(createURL(text))
//     .then(function responseHeader(response) {
//         return response.json()} )
//     .then(function logJSON(json){
//         console.log (json.contents.text)
//         return json.contents.text;
//     })
// }
