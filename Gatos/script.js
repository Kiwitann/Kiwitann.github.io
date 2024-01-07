document.addEventListener('DOMContentLoaded', function () {
    // Ocultar el resultado al inicio
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.add('hidden');

    // Ocultar la imagen al inicio
    // var imagenOcultarMostrar = document.getElementById('imagenOcultarMostrar');
    // imagenOcultarMostrar.style.display = 'none';
});

function mostrarSeleccion() {
    var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');

    if (opcionSeleccionada) {
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.classList.remove('hidden');

        var gifContainer = document.getElementById('contenedorGif');
        var gif = document.getElementById('gif');
        var sonido = document.getElementById('sonido');

        // Cambiar la clase del contenedor del gif según la opción seleccionada
        if (opcionSeleccionada.value === 'opcion1') {
            gifContainer.className = 'gif-container opcion1';
            gif.src = 'Happy Cat1.gif';
            sonido.src = 'Happy Cat.mp3';
        } else if (opcionSeleccionada.value === 'opcion2') {
            gifContainer.className = 'gif-container opcion2';
            gif.src = 'Sad Cat.gif';
            sonido.src = 'Sad Cat.mp3';
        }

        // Deshabilitar los controles de la barra de audio
        sonido.controls = false;

        // Reproducir el sonido automáticamente y repetir cada minuto
        sonido.addEventListener('ended', function () {
            sonido.currentTime = 0; // Reiniciar el audio al inicio
            setTimeout(function () {
                sonido.play();
            }, 1000); // Esperar 1 segundo antes de reproducir nuevamente
        });

        // Ocultar la imagen
        var imagenOcultarMostrar = document.getElementById('imagenOcultarMostrar');
        imagenOcultarMostrar.style.display = 'none';

        // Mostrar el gif
        gif.style.display = 'block';
        resultadoDiv.style.display = 'block';
        sonido.play(); // Iniciar la reproducción
    }
}
