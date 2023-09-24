/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Sunny Yeung';
let currentyear = "2023 Sep 23";
let profilePicture = 'images/IMG_1204 copy.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.getElementById("image");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = "current Year";

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullNmae}`);
/* Step 5 - Array */

let favoriteFoods = ['DimSum', 'Fried Rice', 'Noddles', 'Pizza', 'Salad']
foodElement.innerHTML = favoriteFoods.join();
Food1 = 'Burrito';
favoriteFoods.push(Food1);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;





