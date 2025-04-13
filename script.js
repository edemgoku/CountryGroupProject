// Array of country objects with name and online image URLs
const countries = [
    { name: "Afghanistan", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
    { name: "Aland Island", flag: "https://flagcdn.com/w320/ax.png" },
    { name: "Albania", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "American Samoa", flag: "https://flagcdn.com/w320/as.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Anguilla", flag: "https://flagcdn.com/w320/ai.png" },
    { name: "Antarctica", flag: "https://flagcdn.com/w320/aq.png" },
    { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Aruba", flag: "https://flagcdn.com/w320/aw.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Austria", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bermuda", flag: "https://flagcdn.com/w320/bm.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivia (Plurinational State of)", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bonaire, Sint Eustatius and Sabare", flag: "https://flagcdn.com/w320/bq.png" },
    
];

// Function to generate country cards dynamically
function generateCountryCards(searchInput) {
    const container = document.getElementById("countriesContainer");
    container.innerHTML = ""; // Clear previous content
    let filteredCountries = countries
    .filter(country => country.name.toLowerCase().includes(searchInput.toLowerCase()))

    filteredCountries.forEach(country => {
        // Create the card
        const card = document.createElement("div");
        card.classList.add("country-card");

        // Create the flag image
        const img = document.createElement("img");
        img.src = country.flag;
        img.alt = country.name;

        // Create the country name text
        const name = document.createElement("p");
        name.textContent = country.name.toUpperCase();

        // Add elements to the card
        card.appendChild(img);
        card.appendChild(name);

        // Add card to container
        container.appendChild(card);
    });
}

// Function to search for countries 
function searchCountries() {
    const searchInput = document.getElementById("searchInput").value;
    generateCountryCards(searchInput);
}


// Call the function to generate the content
generateCountryCards("");