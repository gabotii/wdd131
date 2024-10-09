const temples = [
  {
      templeName: "Santiago Chile",
      location: "Santiago, Chile",
      dedicated: "1983-09-15", // Corrected date format
      area: 20831,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg",
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21", // Corrected date format
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07", // Corrected date format
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  // Add more temples here...
];

// Function to display temples
const displayTemples = (templeArray) => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear previous content

  templeArray.forEach((temple) => {
      const templeCard = `
          <figure class="temple-card">
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <figcaption>
                  <h3>${temple.templeName}</h3>
                  <p>Location: ${temple.location}</p>
                  <p>Dedicated: ${temple.dedicated}</p>
                  <p>Area: ${temple.area} sq ft</p>
              </figcaption>
          </figure>
      `;
      gallery.innerHTML += templeCard;
  });
};

// Show all temples on page load
displayTemples(temples);

// Function to filter temples
const filterTemples = (criteria) => {
  let filteredTemples = [];
  switch (criteria) {
      case 'old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
      case 'new':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
      default:
          filteredTemples = temples;
  }
  displayTemples(filteredTemples);
};

// Assign events to menu links for applying filters
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.textContent.toLowerCase(); // Get link text
      filterTemples(filter); // Apply filter
      document.getElementById('selection').textContent = event.target.textContent; // Change title
  });
});

// Update year and last modified in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = `Last Modified: ${document.lastModified}`; // Fixed template literal
