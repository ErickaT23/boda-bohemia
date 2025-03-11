// Función para abrir la invitación (sobre) y reproducir la música
function abrirInvitacion() {
    // Obtener el sobre y la invitación
    const envelope = document.getElementById('envelope');
    const invitacion = document.getElementById('invitacion');
    
    // Añadir clase para animar la apertura del sobre
    envelope.classList.add('open');

    // Mostrar la invitación después de la animación
    setTimeout(() => {
        envelope.style.display = 'none';
        invitacion.style.display = 'block';
        
        // Reproducir la música solo después de abrir el sobre
        const musica = document.getElementById('musica');
        if (musica) {
            musica.play();
        }
    }, 1000); // Ajustar tiempo para esperar la animación de apertura del sobre
}
// Asignar el evento de clic al sello para abrir el sobre
document.addEventListener('DOMContentLoaded', function() {
    const seal = document.getElementById('seal');
    if (seal) {
        seal.addEventListener('click', abrirInvitacion);
    }

    // Iniciar el contador y cargar los datos del invitado al cargar la página
    iniciarContador();
    cargarDatosInvitado();
});
// Función para iniciar el contador de la fecha del evento
// Función para iniciar el contador de la fecha del evento
function iniciarContador() {
    const eventoFecha = new Date("May 31, 2025 00:00:00").getTime(); // Ajusta la fecha exacta

    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = eventoFecha - ahora;

        if (diferencia <= 0) {
            // Cuando el contador llega a cero, detener el intervalo y mostrar el mensaje especial
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = 
                "<p class='mensaje-especial'>Gracias por acompañarnos en este día tan especial</p>";
            return;
        }

        // Cálculo del tiempo restante
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizar los valores en el HTML
        document.getElementById("dias").innerText = dias;
        document.getElementById("horas").innerText = horas;
        document.getElementById("minutos").innerText = minutos;
        document.getElementById("segundos").innerText = segundos;
    }, 1000);
}
// Llamar a la función cuando cargue la página
window.onload = iniciarContador;

// Función para abrir el lightbox solo al hacer clic en una imagen de la galería
function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo-modal');

    // Establecer la imagen del modal como la imagen seleccionada
    mainPhotoModal.src = element.src;

    // Mostrar el modal
    openModal();
}
// Función para mostrar el modal
function openModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'flex'; // Usar 'flex' para centrar la imagen en pantalla
}
// Función para cerrar el modal
function closeModal(event) {
    // Cerrar el modal solo si el clic no fue en la imagen
    if (event.target.id === 'photo-modal' || event.target.className === 'close') {
        const modal = document.getElementById('photo-modal');
        modal.style.display = 'none';
    }
}
// Fade-in effect cuando los elementos se hacen visibles al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        threshold: 0.5, // El porcentaje del elemento que debe ser visible antes de activar la animación
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
            }
        });
    }, observerOptions);

    elementsToFade.forEach(element => {
        observer.observe(element);
    });
});
//Funcion para abrir waze o maps
//iglesia
function elegirAplicacion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/DX1c94Aqd9cqWvrA7';
    const enlaceWaze = 'https://maps.app.goo.gl/DX1c94Aqd9cqWvrA7';

    // Intentar abrir Google Maps primero
    window.open(enlaceGoogleMaps, '_blank');
    
    // Intentar abrir Waze (en caso de que Google Maps no esté disponible)
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000); // Retraso para permitir que el primer enlace se abra si está disponible
}
//fiesta
function elegirAplicacionOtraDireccion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/DX1c94Aqd9cqWvrA7';
    const enlaceWaze = 'https://maps.app.goo.gl/DX1c94Aqd9cqWvrA7';

    // Intentar abrir Google Maps primero
    window.open(enlaceGoogleMaps, '_blank');

    // Intentar abrir Waze (en caso de que Google Maps no esté disponible)
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000); // Retraso para permitir que el primer enlace se abra si está disponible
}
//funcion de galeria
// Función para cambiar la foto principal en la galería
function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo-modal');
    const mainPhoto = document.getElementById('main-photo');

    // Actualizar la imagen en el modal y la imagen principal de la galería
    mainPhotoModal.src = element.src;
    mainPhoto.src = element.src;

    // Si la imagen seleccionada es una miniatura, abrir el modal
    if (element !== mainPhoto) {
        openModal();
    }
}
// Función para abrir el modal
function openModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'block';
}
// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'none';
}
// Añadir evento de cierre al botón de cerrar (la 'X')
document.querySelector('.close').addEventListener('click', closeModal);

// Cierra el modal al hacer clic fuera de la imagen (pero no dentro de la imagen)
document.getElementById('photo-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Evitar que el evento en el sello interfiera con el modal
document.getElementById('seal').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic afecte al modal
    openEnvelopeAndPlayMusic();
});
//
//buenos deseos
let wishes = [];

function submitWish() {
    const name = document.getElementById('wish-name').value;
    const message = document.getElementById('wish-message').value;

    if (name && message) {
        wishes.push({ name, message });
        document.getElementById('wish-name').value = '';
        document.getElementById('wish-message').value = '';
        toggleWishForm();
        displayWishes();
    }
}

function displayWishes() {
    const wishesDiv = document.getElementById('wishes');
    wishesDiv.innerHTML = wishes.map(wish => `<p><strong>${wish.name}:</strong> ${wish.message}</p>`).join('');
}

function toggleWishForm() {
    document.getElementById('wish-form').classList.toggle('hidden');
}

function toggleWishes() {
    document.getElementById('wishes').classList.toggle('hidden');
}
//click calendar
const calendarLink = document.getElementById("addToCalendar");

if (calendarLink) {
    calendarLink.addEventListener("click", function(event) {
        // Abrimos la URL en una nueva ventana o pestaña
        window.open(this.href, "_blank");
        event.preventDefault(); // Prevenir el comportamiento predeterminado
    });
}

//Optimización de código
document.querySelector("h2.fade-in-element").addEventListener("click", () => {
    requestAnimationFrame(() => {
      // Código ligero aquí
    });
  });

  requestAnimationFrame(() => {
    element.style.opacity = "1";
  });

  document.addEventListener("touchstart", function (e) {
    // Código aquí
  }, { passive: true });
  
  const worker = new Worker("worker.js");
  worker.postMessage({ action: "processData" });
    



