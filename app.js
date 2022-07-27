var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");


var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text){
   return serverURL + "?" + "text=" + text
}

function errorHandler(error){
   console.log("error occured ", error);
   alert("Sorry its not my mistake its just you can only translate 5 times for an certain period of time so please try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslateURL(inputText))
  .then(response => response.json())
  .then(json=> {

   var translatedText = json.contents.translated;
   outputDiv.innerText = translatedText;
  })
   .catch(errorHandler);
  
};

btnTranslate.addEventListener("click", clickHandler);