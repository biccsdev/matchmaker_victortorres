const NACIONALIDADES_ACEPTADAS = [
    // América del Norte (北米 - hokubei)
    { key: 'US', name: "Estados Unidos" },
    { key: 'CA', name: "Canadá" },
    { key: 'MX', name: "México" },

    // América del Sur (南米 - nanbei)
    { key: 'BR', name: "Brasil" },
    { key: 'AR', name: "Argentina" },
    { key: 'CL', name: "Chile" },
    { key: 'CO', name: "Colombia" },
    { key: 'PE', name: "Perú" },

    // Europa (ヨーロッパ - yōroppa)
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

    // Asia (アジア - ajia)
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

    // Oceanía (オセアニア - oseania)
    { key: 'AU', name: "Australia" },
    { key: 'NZ', name: "Nueva Zelanda" },

    // África (アフリカ - afurika)
    { key: 'ZA', name: "Sudáfrica" },
    { key: 'EG', name: "Egipto" },
    { key: 'MA', name: "Marruecos" },
    { key: 'NG', name: "Nigeria" }
];

// Rest of the code remains the same...
// Adding more kawaii functionality to our form~ ٩(◕‿◕｡)۶
window.onload = function () {
    const form = document.getElementsByTagName("form")[0];
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");

    // Make our inputs sparkle when focused! ✨
    for (let input of inputs) {
        input.onfocus = resaltarDesresaltar;
        input.addEventListener('blur', resaltarDesresaltar);
    }

    // Give our selects some magic too! 🌟
    for (let select of selects) {
        select.onfocus = resaltar;
        select.addEventListener('blur', noResaltar);
    }

    llenarNacionalidad();
};

// Function to fill our nationality selector with love~ 💝
function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");

    for (let { key, name } of NACIONALIDADES_ACEPTADAS) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

// Make elements kawaii when selected (◕‿◕✿)
function resaltar(evento) {
    evento.target.classList.add("selected");
}

// Return to normal state but still cute~
function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }
}

// Toggle our kawaii selected state! ✨
function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}