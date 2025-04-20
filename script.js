// import { countries } from "./countries.js";

// // // Function to generate country cards dynamically
// // function generateCountryCards() {
// //     const container = document.getElementById("countriesContainer");

// //     countries.forEach(country => {
// //         // Create the card
// //         const card = document.createElement("div");
// //         card.classList.add("country-card");

// //         // Create the flag image
// //         const img = document.createElement("img");
// //         img.src = country.flag;
// //         img.alt = country.name;

// //         // Create the country name text
// //         const name = document.createElement("p");
// //         name.textContent = country.name.toUpperCase();

// //         // Add elements to the card
// //         card.appendChild(img);
// //         card.appendChild(name);

// //         // Add card to container
// //         container.appendChild(card);
// //     });
// // }

// // // Call the function to generate the content
// // generateCountryCards();
const container = document.getElementById("countriesContainer");
async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json()
    const newCountries = countries.map(country => {
        return {
            name: country.name.common,
            flag: country.flags.svg,
            population: country.population
        }
    })
    newCountries.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
        }
    })
    console.log(newCountries);

    function generateCountryCards() {
        newCountries.forEach(country => {
            const card = document.createElement("div");
            card.classList.add("country-card");
            const img = document.createElement("img");
            img.src = country.flag;
            img.alt = country.name;
            const name = document.createElement("p");
            name.textContent = country.name.toUpperCase();
            const population = document.createElement("p");
            population.textContent =`Population:  ${country.population}`;

            // Add elements to the card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(population);

            // Add card to container
            container.appendChild(card);
        });
    }
    generateCountryCards();
}
fetchCountries();