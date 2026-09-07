let slideActual = 0;

const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");


function mostrarSlide(numero) {

    if (numero >= slides.length) {
        slideActual = 0;
    }

    else if (numero < 0) {
        slideActual = slides.length - 1;
    }

    else {
        slideActual = numero;
    }


    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    puntos.forEach(function(punto) {

        punto.classList.remove("active");

    });


    slides[slideActual].classList.add("active");

    puntos[slideActual].classList.add("active");

}


function cambiarSlide(direccion) {

    slideActual += direccion;

    mostrarSlide(slideActual);

}


/* Cambio automático */

setInterval(function() {

    cambiarSlide(1);

}, 5000);