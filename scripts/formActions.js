const NACIONALIDADES_ACEPTADAS = [
    { key: 'US', name: "Estados Unidos" },
    { key: 'CA', name: "Canadá" },
    { key: 'MX', name: "México" },

    { key: 'BR', name: "Brasil" },
    { key: 'AR', name: "Argentina" },
    { key: 'CL', name: "Chile" },
    { key: 'CO', name: "Colombia" },
    { key: 'PE', name: "Perú" },

    { key: 'ES', name: "España" },
    { key: 'FR', name: "Francia" },
    { key: 'IT', name: "Italia" },
    { key: 'DE', name: "Alemania" },
    { key: 'UK', name: "Reino Unido" },
    { key: 'PT', name: "Portugal" },
    { key: 'TR', name: "Turquía" },
    { key: 'UA', name: "Ucrania" },
    { key: 'RU', name: "Rusia" },
    { key: 'SE', name: "Suecia" },
    { key: 'NO', name: "Noruega" },

    { key: 'JP', name: "Japón" },
    { key: 'KR', name: "Corea del Sur" },
    { key: 'CN', name: "China" },
    { key: 'TW', name: "Taiwán" },
    { key: 'HK', name: "Hong Kong" },
    { key: 'SG', name: "Singapur" },
    { key: 'TH', name: "Tailandia" },
    { key: 'VN', name: "Vietnam" },
    { key: 'PH', name: "Filipinas" },
    { key: 'IN', name: "India" },

    { key: 'AU', name: "Australia" },
    { key: 'NZ', name: "Nueva Zelanda" },

    { key: 'ZA', name: "Sudáfrica" },
    { key: 'EG', name: "Egipto" },
    { key: 'MA', name: "Marruecos" },
    { key: 'NG', name: "Nigeria" }
];

const NATIONALITY_MAPPING = {
    'US': 'us', 'CA': 'ca', 'MX': 'mx', 'BR': 'br', 'ES': 'es',
    'FR': 'fr', 'DE': 'de', 'AU': 'au', 'NZ': 'nz', 'TR': 'tr',
    'GB': 'gb', 'NO': 'no', 'FI': 'fi', 'DK': 'dk', 'NL': 'nl'
};


window.onload = function () {
    const form = document.getElementsByTagName("form")[0];
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");

    for (let input of inputs) {
        input.onfocus = resaltarDesresaltar;
        input.addEventListener('blur', resaltarDesresaltar);
    }

    for (let select of selects) {
        select.onfocus = resaltar;
        select.addEventListener('blur', noResaltar);
    }

    llenarNacionalidad();

    form.addEventListener('submit', handleSubmit);
};

function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");

    for (let { key, name } of NACIONALIDADES_ACEPTADAS) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function resaltar(evento) {
    evento.target.classList.add("selected");
}

function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }
}

function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}

async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const gender = formData.get('gender');
    const nationality = formData.get('nationality');

    try {
        const match = await findMatch(gender, nationality);
        if (match) {
            saveMatchToLocalStorage(match);
            window.location.href = 'match.html';
        }
    } catch (error) {
        console.error('No match found (マッチが見つかりません - matchi ga mitsukarimasen)', error);
    }
}

async function findMatch(gender, nationality) {
    const apiGender = gender === 'hombre' ? 'male' : 'female';
    const apiNationality = NATIONALITY_MAPPING[nationality] || 'us';

    const response = await fetch(
        `https://randomuser.me/api/?gender=${apiGender}&nat=${apiNationality}`
    );
    const data = await response.json();
    return data.results[0];
}

function saveMatchToLocalStorage(match) {
    localStorage.setItem('kawaii_match', JSON.stringify(match));
}