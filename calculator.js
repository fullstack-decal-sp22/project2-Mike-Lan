//Check out calculator_hints.js for hints if you're stuck
let screenDisplay = "0";
let previousNum = 0;
let calculation = null;

function updateScreenDisplay() {
    document.querySelector(".result-screen").innerHTML = screenDisplay;
}

function ClearMemory() {
    screenDisplay = "0";
    previousNum = 0;
    calculation = null;
}

function onClickZero(event) {
    if(screenDisplay != "0"){
        screenDisplay = screenDisplay + "0";
        if(calculation === null)previousNum = parseInt(screenDisplay); 
    }
    updateScreenDisplay();
}

function onClickLastButtons(event) {
    calculation = event.target.innerHTML;
    previousNum = parseInt(screenDisplay);
    screenDisplay = "0";
    updateScreenDisplay();
}

function onClickClear(event) {
    ClearMemory();
    updateScreenDisplay();
}

function onClickDelete(event) {
    screenDisplay = screenDisplay.slice(0,-1);
    if(screenDisplay == "") screenDisplay = "0";
    updateScreenDisplay();
}

function onClickEquals(event) {
    if(calculation == "+") {
        screenDisplay = previousNum + parseInt(screenDisplay);
    } 
    else if(calculation == "-") {
        screenDisplay = previousNum - parseInt(screenDisplay);
    }
    else if(calculation == "x") {
        screenDisplay = previousNum * parseInt(screenDisplay);
    }
    else if(calculation == "÷") {
        if(!isNaN(previousNum / parseInt(screenDisplay)))
            screenDisplay = previousNum / parseInt(screenDisplay);
        else {
            screenDisplay = "Infinity";
        }
    }
    updateScreenDisplay();
    ClearMemory();
}

function onClickNormalDigits(event){
    if(screenDisplay != "0"){
        screenDisplay += event.target.innerHTML;
    }
    else {
        screenDisplay = event.target.innerHTML;
    }
    updateScreenDisplay();
}

function setListeners() {
    let buttons = Array.from(document.querySelectorAll("button"));
    if(buttons === null)throw new Error("JavaScript failed!");
    for (index in buttons){
        if(buttons[index].id == "zero-button") {
            buttons[index].addEventListener("click", onClickZero);
        }
        else if(buttons[index].id == "last-buttons") {
            buttons[index].addEventListener("click", onClickLastButtons);
        }
        else if(buttons[index].id == "c-button") {
            buttons[index].addEventListener("click", onClickClear);
        }
        else if(buttons[index].id == "delete-button") {
            buttons[index].addEventListener("click", onClickDelete);
        }
        else if(buttons[index].id == "equals-button") {
            buttons[index].addEventListener("click", onClickEquals);
        }
        else {
            buttons[index].addEventListener("click", onClickNormalDigits);
        }
    }
}

setListeners();