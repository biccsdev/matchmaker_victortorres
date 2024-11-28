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