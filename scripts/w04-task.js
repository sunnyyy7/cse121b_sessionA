/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myprofile = {

/* Populate Profile Object with placesLive objects */
    myProfile.placeLived.push(
        {
            place: 'Rexburg, US',
            length: '3 years',
            placemission: 'Toronto, CA',
            length: '2 years',
            born:'Hong Kong',
            length: '20years',
            
        }
    );

/* DOM Manipulation - Output */

/* Name */
    name: "Sunny Yeung",

    document.querySelector('#name'). textContent = myProfile.name;
    
/* Photo with attributes */
    photo: 'images/IMG_1204 copy.jpg',

    document.querySelector('#photo'). textContent = 'src', profilePicture;
    document.querySelector('#name'). textContent = 'alt','images/IMG_1204 copy.jpg';

/* Favorite Foods List*/
    favoriteFoods: [
        'DimSum', 
        'Fried Rice', 
        'Noddles', 
        'Pizza', 
        'Salad'
    ],

    myProfile.favriteFoods.forEach(food => {
        let li = document.createElement ('li');
        li. etxtContent = food;
        document.querySelector('#favorite-foods') .appendChild(li);
    });

/* Hobbies List */
    hobbies: [
        'Basketball',
        'Football',
        'pickle ball',
        'Outdoor activity',
        'Board games',
        'Travel'

    ],

    myProfile.hobbies.forEach(food => {
        let li = document.createElement ('li');
        li. etxtContent = food;
        document.querySelector('#hobbies') .appendChild(li);
    });

/* Places Lived DataList */
    placesLived: [
    ],

    myProfile.placesLived.forEach(place => {
        let dt = document.createElement ('dt');
        dt. etxtContent = [place];
        document.querySelector('#places-lived') .appendChild(dt);
    });

    myProfile.placesLived.forEach(length => {
        let dd = document.createElement ('dd');
        dd. etxtContent = length;
        document.querySelector('#places-lived') .appendChild(dd);
    });

    myProfile.placesLived.forEach(born => {
        let dl = document.createElement ('dl');
        dl. etxtContent = born;
        document.querySelector('#places-lived') .appendChild(dl);
    });
},