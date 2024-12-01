window.onload = function () {
    displayMatch();
};

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function displayMatch() {
    const matchData = JSON.parse(localStorage.getItem('the_match'));
    if (!matchData) {
        console.error('No match data found in localStorage');
        return;
    }

    // Update profile picture
    const profilePic = document.getElementById('matchPhoto');
    if (profilePic) {
        profilePic.src = matchData.picture.large;
        profilePic.alt = `${matchData.name.first} ${matchData.name.last}`;
    }

    // Update name and age
    const nameElement = document.getElementById('matchName');
    if (nameElement) {
        nameElement.textContent = `${matchData.name.first} ${matchData.name.last}`;
    }

    const ageElement = document.getElementById('matchAge');
    if (ageElement) {
        ageElement.textContent = matchData.dob.age;
    }

    // Update gender
    const genderElement = document.getElementById('matchGender');
    if (genderElement) {
        genderElement.textContent = matchData.gender === 'male' ? 'Hombre' : 'Mujer';
    }

    // Update date of birth
    const dobElement = document.getElementById('matchDob');
    if (dobElement) {
        dobElement.textContent = formatDate(matchData.dob.date);
    }

    // Update address
    const streetElement = document.getElementById('matchStreet');
    if (streetElement) {
        streetElement.textContent = `${matchData.location.street.number} ${matchData.location.street.name}`;
    }

    // Update city
    const cityElement = document.getElementById('matchCity');
    if (cityElement) {
        cityElement.textContent = matchData.location.city;
    }

    // Update country
    const countryElement = document.getElementById('matchCountry');
    if (countryElement) {
        countryElement.textContent = matchData.location.country;
    }

    // Update email
    const emailElement = document.getElementById('matchEmail');
    if (emailElement) {
        emailElement.textContent = matchData.email;
    }

    // Update phone numbers
    const phoneElement = document.getElementById('matchPhone');
    if (phoneElement) {
        phoneElement.textContent = matchData.phone;
    }

    const cellElement = document.getElementById('matchCell');
    if (cellElement) {
        cellElement.textContent = matchData.cell;
    }

    // Add the match-found class to show the card with animation
    const card = document.querySelector('.card');
    if (card) {
        card.classList.add('match-found');
    }
}