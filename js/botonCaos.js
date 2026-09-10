const boton = document.getElementById('botonCaos');

boton.addEventListener('click', () => {

// Cambiar el texto del botón
boton.classList.toggle('btn-activo');

if (boton.classList.contains('btn-activo')) {
    boton.textContent = 'Regresa Valeria!';
} else {
    boton.textContent = 'Activar bomba atómica';
}



});