/* W05: Programming Tasks */
const templesElement = document.quarySelector('temples');
let templelist = [];

const displayTemples = (temples) => {
temples.forEach(temple => {
    let article = document.createElement('article');
    let templeName = document.createElement('h3')
    templeName.textContent = temple.templeName;
    let img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.location);
    
    article.appendChild(templeName);
    article.appendChild(img);

    templesElement.appendChild(article);
});
}

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templelist = await response.json();
    displayTemples(templeList);
};

const reset = () => {
    templesElement.innerHTML = '';
};

const sortBy = (temples) => {
    reset();
    switch (document .querySelector('#sortBy').value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Uath")));
            break;
            case "noutah":
                displayTemples(temples.filter(temple => !temple.location.includes("utah")));
                break;
                case "before1950":
                    displayTemples(temples.filter(temple => temple.time))
                    case "all":
                        displayTemples(temples);
                        break;

    }
    displayTemples(temples);
}

/* Declare and initialize global variables */


/* async displayTemples Function */           

                                                                                              


/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
