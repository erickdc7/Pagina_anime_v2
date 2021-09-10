// Anime del día - Arrows
var fila = document.querySelector('.container-carrusel');
var animepic = document.querySelector('.animespic');

var flechaIzquierda = document.getElementById('flecha-izquierda');
var flechaDerecha = document.getElementById('flecha-derecha');

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// Anime de la semana - Arrows

var fila2 = document.querySelector('.container-carrusel2');
var animepic2 = document.querySelector('.animespic2');

var flechaIzquierda2 = document.getElementById('flecha-izquierda2');
var flechaDerecha2 = document.getElementById('flecha-derecha2');

flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;
});

flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;
});

