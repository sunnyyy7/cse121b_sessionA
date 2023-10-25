/* W05: Programming Tasks */

const today = new Date();

let dayOfWeek;

dayOfWeek = today.getDay();

let message1;

if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  message1 = "Welcome to the temple!";
}

if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  message1 = "Welcome to the temple!";
} else {
  message1 = "I love to see the temple!";
}

/* SWITCH, CASE, BREAK */

let message2;

switch (dayOfWeek) {
  case 0:
    message2 = "Sunday";
    break;
  case 1:
    message2 = "Monday";
    break;
  case 2:
    message2 = "Tuesday";
    break;
  case 3:
    message2 = "Wednesday";
    break;
  case 4:
    message2 = "Thursday";
    break;
  case 5:
    message2 = "Friday";
    break;
  case 6:
    message2 = "Saturday";
    break;
  default:
    message2 = "Unknown - " + dayOfWeek;
    break;
}

document.querySelector("#message1").textContent = message1;

document.querySelector("#message2").textContent = message2;

const output = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    let location = document.createElement("h4");
    location.textContent = temple.location;

    let dedicated = document.createElement("h4");
    dedicated.textContent = temple.dedicated;
//location and templeName
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute('alt', temple.location);

    article.appendChild(templeName);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(img);

    document.querySelector("#temples").appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-course/week05/temples.json"
  );
  templeList = await response.json();
  output(templeList);
};
getTemples();

const reset = () => {
  document.querySelector("#temples").innerHTML = "";
};

const sortBy = () => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "templeNameAscending":
      output(
        templeList.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 < templeName2) return -1;
          else if (templeName1 > templeName2) return 1;
          else return 0;
        })
      );
      break;
    case "templeNameDescending":
      output(
        templeList.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 > templeName2) return -1;
          else if (templeName1 < templeName2) return 1;
          else return 0;
        })
      );
      break;      
    case "utah":
      output(
        templeList
          .filter((temple) => temple.location === "Utah") // Filter Utah temples
          .sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return 1;
            else if (templeName1 < templeName2) return -1;
            else return 0;
          })
      );
    case "noUtah":
      output(
      templeList
        .filter((temple) => temple.location !== "Utah") // Filter out Utah temples
        .sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 > templeName2) return 1;
          else if (templeName1 < templeName2) return -1;
          else return 0;
        })
      );
  break;
     

    case "older":
      output(
        templeList.sort((temple1, temple2) => {
          const date1 = new Date(temple1.dedicated);
          const date2 = new Date(temple2.dedicated);

          if (date1 < date2) return -1;
          else if (date1 > date2) return 1;
          else return 0;
        })
      );
  break;
  

    case "all":
      output(
        templeList.sort((temple1, temple2) =>
          temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
            ? 1
            : temple2.templeName.toLowerCase() >
              temple1.templeName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;

    default:
      // using ternary operators
      output(
        templeList.sort((temple1, temple2) =>
          temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
            ? 1
            : temple2.templeName.toLowerCase() >
              temple1.templeName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
};

document.querySelector("#sortBy").addEventListener("change", sortBy);

/* Declare and initialize global variables */


/* async displayTemples Function */           

                                                                                              


/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */





/* Event Listener */
