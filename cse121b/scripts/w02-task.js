/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Christina Thibodeau';
let currentYear = '2023';
let profilePicture = 'images/easter.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const favFood = ['Tacos', 'Beef Ribs', 'Sirloin', 'Lasagna', 'Strawberries', 'Bacon Avocado Burgers']
foodElement.innerHTML = favFood;

/* Hello Burritos! I'm sorry I forgot about you */
let anotherFavFood = 'Burritos';
favFood.push(anotherFavFood);
foodElement.innerHTML += `<br>${favFood}`;

/* Bye Bye Tacos :( Why did you have to be first in the list!!! */
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

/* Bye Bye Burritos :( Why did you have to be last in the list!!! */
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;

