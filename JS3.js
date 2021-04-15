/*
  This is the script file for the JS3.html page
  Author: Aubrey Davies
  File: JS3.js
  Date: 04/15/2021
*/

document.getElementById("heehaw").onsubmit = validate;

function validate() {
    let isValid = true;

    //clear all error msgs
    let errNum = document.getElementById("err-num");
    errNum.style.display = "none";

    let num = document.getElementById("inputnum").value; //get the input value
    if (isNaN(num) || num < 1) { //check that it's a number greater than 0
        errNum.style.display = "inline";
        isValid = false;
    }

    if (isValid) { //if the user entered a valid number
        heehaw(num);
    }
}

function heehaw(num) {

    let displayNum = document.getElementById("haw");
    displayNum.style.display = "inline";

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.write('<p>Hee Haw!</p>');
        }
        else if (i % 3 === 0) {
            document.write('<p>Hee!</p>');
        }
        else if (i % 5 === 0) {
            document.write('<p>Haw!</p>');
        }
        else {
            document.write('<p>' + i + '</p>');
        }
    }
}