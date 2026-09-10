const boton = document.getElementById('botonCaos');

boton.addEventListener('click', () => {

// Cambiar el texto del botón
boton.textContent = 'Regresa Valeria!';

// Cambiar el color del botón
boton.classList.add('btn-activo');


});