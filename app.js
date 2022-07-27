var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

var outputDiv = document.querySelector("#output");


function clickHandler() 
{
   outputDiv.innerText="jkjakhjkjh "+ txtInput.value
};

btnTranslate.addEventListener("click", clickHandler);

