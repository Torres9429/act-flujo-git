const footerElement = document.createElement('footer');

footerElement.innerHTML = `
  <div class="footer-content">
    <p>&copy; ${new Date().getFullYear()} Footer de prueba</p>
  </div>
`;

// 3. Aplicar estilos CSS directamente desde JavaScript (Opcional)
// También podrías simplemente asignarle una clase y darle estilos en tu archivo CSS
footerElement.style.backgroundColor = '#333';
footerElement.style.color = '#fff';
footerElement.style.textAlign = 'center';
footerElement.style.padding = '8px 0';
footerElement.style.position = 'relative';
footerElement.style.bottom = '0';
footerElement.style.width = '100%';

// 4. Asegurarse de que el body no tenga margen para que el footer ocupe todo el ancho
document.body.style.margin = '0';
document.body.style.minHeight = '100vh'; 
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';

// Para empujar el footer al final si hay poco contenido
footerElement.style.marginTop = 'auto'; 

// 5. Insertar el footer al final del <body> en el DOM
document.body.appendChild(footerElement);

// Agregar un evento al botón para desplazarse al html de formulario-absurdo.html
const botonFormulario = document.getElementById('botonFormulario');
botonFormulario.addEventListener('click', () => {
    window.location.href = 'formulario-absurdo.html';
});