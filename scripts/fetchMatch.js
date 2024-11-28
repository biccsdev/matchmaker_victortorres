window.onload = function () {
    displayKawaiiMatch();
};

function displayKawaiiMatch() {
    const matchData = JSON.parse(localStorage.getItem('kawaii_match'));
    if (!matchData) return;

    // Set profile picture (プロフィール写真 - purofīru shashin)
    document.getElementById('matchPhoto').src = matchData.picture.large;

    // Set name and age (名前と年齢 - namae to nenrei)
    document.getElementById('matchName').textContent =
        `${matchData.name.first} ${matchData.name.last}`;
    document.getElementById('matchAge').textContent = matchData.dob.age;

    // Set other details (その他の詳細 - sonota no shōsai)
    document.getElementById('matchGender').textContent =
        matchData.gender === 'male' ? 'Hombre' : 'Mujer';
    document.getElementById('matchLocation').textContent =
        `${matchData.location.city}, ${matchData.location.country}`;
    document.getElementById('matchEmail').textContent = matchData.email;
    document.getElementById('matchPhone').textContent = matchData.phone;

    // Add sparkly animation (きらきらアニメーション - kirakira animēshon)
    document.querySelector('.card').classList.add('match-found');
}