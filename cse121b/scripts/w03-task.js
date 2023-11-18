/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
   return number1 + number2; 
};

function addNumbers() {
    let addNumber1 = parseInt(document.querySelector('#add1').value);
    let addNumber2 = parseInt(document.querySelector('#add2').value);
    document.getElementById('sum').value = add(addNumber1, addNumber2);    
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

let subtract = function(number1, number2) { 
    return number1 - number2;
};

let subtractNumbers = function() {
    let subNumber1 = parseInt(document.querySelector('#subtract1').value);
    let subNumber2 = parseInt(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let mulNumber1 = parseInt(document.querySelector('#factor1').value);
    let mulNumber2 = parseInt(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mulNumber1, mulNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2; 
 };
 
 function divideNumbers() {
     let divNumber1 = parseInt(document.querySelector('#dividend').value);
     let divNumber2 = parseInt(document.querySelector('#divisor').value);
     document.getElementById('quotient').value = divide(divNumber1, divNumber2);    
 };
 
 document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal() {

    let structureSection = parseInt(document.querySelector('#subtotal').value);

    let calculatedTotal;

    if (document.getElementById('member').checked){
        calculatedTotal = structureSection - (structureSection * .2);
    } else { 
        calculatedTotal = structureSection;
    }

    document.querySelector('#total').textContent = `$ ${calculatedTotal.toFixed(2)}`;
};

document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let sourceArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerText = sourceArray;

/* Output Odds Only Array */

let oddsArray = sourceArray.filter(number => number % 2);
document.getElementById('odds').innerText = oddsArray;

/* Output Evens Only Array */

let evensArray = sourceArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerText = evensArray;

/* Output Sum of Org. Array */

let sumArray = sourceArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerText = sumArray;

/* Output Multiplied by 2 Array */

let multiplyArray = sourceArray.map(number => number * 2);
document.getElementById('multiplied').innerText = multiplyArray;

/* Output Sum of Multiplied by 2 Array */

let multiplyArrayAgain = sourceArray.map(number => number * 2);
let sumArrayAgain = multiplyArrayAgain.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerText = sumArrayAgain;