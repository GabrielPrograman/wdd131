const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('show');

});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
];

const gridContainer = document.querySelector(".grid-container");
const galleryTitle = document.querySelector("main h2");

function displayTemples(filteredTemples) {
    gridContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><span>Location:/<span> ${temple.location}</p>
    <p><span>Dedicated:/<span> ${temple.dedicated}</p>
    <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="400" height="250" loading="lazy">
    `;

    gridContainer.appendChild(figure);
    });
}

displayTemples(temples);

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const filterText = link.textContent.toLowerCase().trim();

      if (filterText === "old") {
        galleryTitle.textContent = "Old Temples";
        const oldTemples = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0].trim());
            return year < 1900;
        });
        displayTemples(oldTemples);

      } else if (filterText === "new") {
        galleryTitle.textContent = "New Temples";
        const newTemples = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0].trim());
            return year < 2000;
        });
        displayTemples(newTemples);

      } else if (filterText === "large") { 
        galleryTitle.textContent = "Large Temples";
        const largeTemples = temples.filter(t => t.area > 90000);
        displayTemples(largeTemples);
      
      } else if (filterText === "small") {
        galleryTitle.textContent = "Small Temples";
        const smallTemples = temples.filter(t => t.area > 10000);
        displayTemples(smallTemples);

      } else {
        galleryTitle.textContent = "Our Temple Collection";
        displayTemples(temples);
      }

      navigation.classList.remove("show");
      menuButton.classList.remove("show");
    });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("LastModified").textContent = `Last Modified: ${document.all ? document.lastModified : document.lastModified}`;