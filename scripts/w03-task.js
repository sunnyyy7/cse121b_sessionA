/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    // functionbody
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.getElementById("sum").innerHTML = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener
("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.getElementById("difference").innerHTML = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function add (number1, number2) {
    // functionbody
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.getElementById("sum").innerHTML = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener
("click", addNumbers);

/* Open Function Use - Divide Numbers */


/* Decision Structure */
let today = new Date ();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent = currentYear;

/*document.getElementById("year").textContent = new Date().getFullYear(); */

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

/* Output Odds Only Array */
document.querySelector('#evens').innerHTML = numberArray.filter(number) => number % 2 === 0);
/* Output Evens Only Array */
numbersArray.reduce((sum, number) => sum + numnber)
/* Output Sum of Org. Array */
numberArray.map(number => number *2)
/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
