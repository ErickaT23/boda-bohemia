const guests = [
    { id: "1", name: "Mi querida Madre Herlinda Márquez", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "2", name: "Sr. Juan Manuel Mazá y fam.", adultPasses: 2, childPasses: 2 },
    { id: "3", name: "Yesser Guerra", adultPasses: 1, childPasses: 0, gender: "Masculino" },
    { id: "4", name: "Mildred Veliz", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "5", name: "Sr. Carlos Guerra, Sra. Eva Méndez y Srita. Jannely Guerra", adultPasses: 3, childPasses: 0 },
    { id: "6", name: "Sr. José Manuel Guerra y esposa", adultPasses: 2, childPasses: 0 },
    { id: "7", name: "Sr. Carlos Francisco Guerrra y esposa", adultPasses: 2, childPasses: 0 },
    { id: "8", name: "Sr. Wilder Guerra y esposa", adultPasses: 2, childPasses: 0 },
    { id: "9", name: "Sr. Heyser Guerra y esposa", adultPasses: 2, childPasses: 0 },
    { id: "10", name: "Sra. Soila Góngora", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "11", name: "Sra. Jisela Guerra y Jonathan Blanco", adultPasses: 2, childPasses: 0 },
    { id: "12", name: "Sra. Jenifer Flores", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "13", name: "Sr. Lázaro Márquez y dos acompañantes", adultPasses: 3, childPasses: 0 },
    { id: "14", name: "Sra. Hurcina Márquez y acompañante", adultPasses: 2, childPasses: 0 },
    { id: "15", name: "Sr. Wilson Sin y fam.", adultPasses: 3, childPasses: 1 },
    { id: "16", name: "Sr. Edelmo Márquez y esposa", adultPasses: 2, childPasses: 0 },
    { id: "17", name: "Sr. Antonio Márquez y esposa", adultPasses: 2, childPasses: 0 },
    { id: "18", name: "Sra. Yoselyn Sin", adultPasses: 1, childPasses: 2, gender: "Femenino" },
    { id: "19", name: "Sra. María de Jesús Sin y fam.", adultPasses: 3, childPasses: 0 },
    { id: "20", name: "Sr. Mario Chavez y fam.", adultPasses: 4, childPasses: 0 },
    { id: "21", name: "Sr. Sebastian Chavez y fam.", adultPasses: 5, childPasses: 0 },
    { id: "22", name: "Sr. Elías Peláez y esposa", adultPasses: 2, childPasses: 0 },
    { id: "23", name: "Alfonso Montepeque", adultPasses: 1, childPasses: 0, gender: "Masculino" },
    { id: "24", name: "María de Lourdes Fong", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "25", name: "Sra. Yulma Batún", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "26", name: "Sr. Albertico Orrego y esposa", adultPasses: 2, childPasses: 0 },
    { id: "27", name: "Sr. Hugo Polanco y esposa", adultPasses: 2, childPasses: 0 },
    { id: "28", name: "Mis queridos Padres", adultPasses: 2, childPasses: 0 },
    { id: "29", name: "Sra. Iris López y fam.", adultPasses: 2, childPasses: 2 },
    { id: "30", name: "Sra. Sulma López y fam.", adultPasses: 2, childPasses: 2 },
    { id: "31", name: "Sra. Marisol López y Esposo", adultPasses: 2, childPasses: 0 },
    { id: "32", name: "Srita. Feve López", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "33", name: "Sr. Wilder López y Esposa", adultPasses: 2, childPasses: 0 },
    { id: "34", name: "Sr. Josías y familia", adultPasses: 0, childPasses: 0 },
    { id: "35", name: "Hno. Israel Barrera y esposa", adultPasses: 2, childPasses: 0 },
    { id: "36", name: "Hna. Mirna Estévez", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "37", name: "Hno. Mario Cojón", adultPasses: 1, childPasses: 0, gender: "Masculino" },
    { id: "38", name: "Hna. Silvia Valenzuela", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "39", name: "Hna. Mirella Calderón", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "40", name: "Hna. Sarai Chávez", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "41", name: "Sritas. Karen Lara y Yesica Lara", adultPasses: 2, childPasses: 0 },
    { id: "42", name: "Srita. Susy Vanegas", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "43", name: "Srita. Micaela Raxan", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "44", name: "Srita. Maybyn Herrarte", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "45", name: "Srita. Kelly Lux", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "46", name: "Srita. Kimy Ramirez", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "47", name: "Srita. Talita López", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "48", name: "Hno. Jonathan Acevedo y Esposa", adultPasses: 2, childPasses: 0 },
    { id: "49", name: "Pastor Juan Funez", adultPasses: 1, childPasses: 0, gender: "Masculino" },
    { id: "50", name: "Sra. Leticia Díaz", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "51", name: "Sra. Maria Mercedes de Archila", adultPasses: 2, childPasses: 0 },
    { id: "52", name: "Hna. Violeta Flores", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "53", name: "Hna. Mirza Moran", adultPasses: 3, childPasses: 0 },
    { id: "54", name: "Srita. Abdi Villatoro", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "55", name: "Hno. Samuel Barrientos y Esposa", adultPasses: 2, childPasses: 0 },
    { id: "56", name: "Srita. Banesa Palma", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "57", name: "Srita. Katia Flores", adultPasses: 1, childPasses: 0, gender: "Femenino" },
    { id: "58", name: "Hno. Manolo González y fam.", adultPasses: 3, childPasses: 0 },
];

document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestId = queryParams.id;

    // Buscar el invitado en el array
    const guest = guests.find(g => g.id === guestId);

    if (guest) {
        const totalPasses = guest.adultPasses + guest.childPasses;
        const adultText = guest.adultPasses === 1 ? "1 adulto" : `${guest.adultPasses} adultos`;
        const childText = guest.childPasses === 0 ? "" : ` y ${guest.childPasses} ${guest.childPasses === 1 ? 'niño' : 'niños'}`;

        let invitationText = '';
        if (guest.adultPasses === 1) {
            // Para un solo adulto, asignar según el género
            invitationText = guest.gender === "Masculino" ? `¡${guest.name}, estás invitado!` : `¡${guest.name}, estás invitada!`;
        } else {
            // Para más de un adulto
            invitationText = `¡${guest.name}, están invitados!`;
        }

        document.getElementById('guest-name').textContent = invitationText;
        document.getElementById('passes').textContent = `${adultText}${childText}`;
    } else {
        document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
        document.querySelector('.invitation-info-section').style.display = 'none';
    }
});


