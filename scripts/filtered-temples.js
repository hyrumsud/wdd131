
const yearEl = document.getElementById('currentyear');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.getElementById('lastModified');
if (lastModEl) {
  lastModEl.textContent = document.lastModified;
}

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
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52590,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

const cardsContainer = document.querySelector("#templeCards");

function displayTemples(templesArray) {
  cardsContainer.innerHTML = "";

  templesArray.forEach((temple) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Size: ${temple.area} sq ft`;

    image.src = temple.imageUrl;
    image.loading = "lazy";
    image.alt = `${temple.templeName} Temple`;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    cardsContainer.appendChild(card);
  });
}

displayTemples(temples);

function setActive(linkId) {
  document
    .querySelectorAll("header nav a")
    .forEach((a) => a.classList.remove("active"));
  const current = document.querySelector(`#${linkId}`);
  if (current) current.classList.add("active");
}

document.querySelector("#home").addEventListener("click", (event) => {
  event.preventDefault();
  setActive("home");
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
  event.preventDefault();
  setActive("old");
  const oldTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (event) => {
  event.preventDefault();
  setActive("new");
  const newTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (event) => {
  event.preventDefault();
  setActive("large");
  const largeTemples = temples.filter((t) => t.area > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (event) => {
  event.preventDefault();
  setActive("small");
  const smallTemples = temples.filter((t) => t.area < 10000);
  displayTemples(smallTemples);
});

const yearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}
