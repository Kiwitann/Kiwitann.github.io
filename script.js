// Obtén una referencia a los elementos de las imágenes
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5')
const imagen6 = document.getElementById('imagen6')
const imagen7 = document.getElementById('imagen7')
const texto = document.getElementById('texto')
const Maullido = document.getElementById('Maullido')
const FloresAmarillas = document.getElementById('FloresAmarillas')

imagen7.style.display = 'none';

// Agrega un event listener para el clic en la primera imagen
imagen1.addEventListener('click', function() {
    // Aplica una animación para mover la primera imagen hacia la izquierda antes de ocultarla
    
    imagen1.style.transition = 'all 1s ease';
    Maullido.play();
    imagen1.style.transform = 'translateX(+100%)';
    setTimeout(function() {
        imagen1.style.display = 'none';
        // Muestra la segunda imagen
        imagen2.style.display = 'block';
        imagen2.style.transition = 'all 1s ease';
        imagen2.style.transform = 'translateY(+100%)'

        //imagen5.style.display = 'none';
        //imagen7.style.display = 'block';

    }, 1000);
    
});



// Agrega un event listener para el clic en la segunda imagen
imagen2.addEventListener('click', function() {
    // Aplica una animación para mover la segunda imagen hacia la izquierda antes de ocultarla
    Maullido.play();
    imagen2.style.transition = 'all 1s ease';
    imagen2.style.transform = 'translateY(-100%)';
    //Muestra la imagen 3
    //imagen3.style.display = 'block';
    setTimeout(function() {
        imagen2.style.display = 'none';
        imagen3.style.display = 'block';
        imagen3.style.transition = 'all 1s ease';
        imagen3.style.transform = 'translateX(+100%)'
    }, 1000);
});

imagen3.addEventListener('click', function() {
    // Aplica una animación para mover la imagen 3 hacia la derecha antes de ocultarla
    Maullido.play();
    imagen3.style.transition = 'all 1s ease';
    imagen3.style.transform = 'translateX(-100%)';
    setTimeout(function() {
        imagen3.style.display = 'none';
        imagen4.style.display = 'block';
        imagen4.style.transition = 'all 1s ease';
        imagen4.style.transform = 'translateX(+100%)'
    }, 1000);
});

imagen4.addEventListener('click', function() {
    // Aplica una animación para mover la imagen 3 hacia la derecha antes de ocultarla
    Maullido.play();
    imagen4.style.transition = 'all 1s ease';
    imagen4.style.transform = 'translateX(-100%)';
    setTimeout(function() {
        imagen4.style.display = 'none';
        //imagen4.style.display = 'block';
        // imagen4.style.transition = 'all 1s ease';
        // imagen4.style.transform = 'translateX(+100%)'
        imagen5.style.transition = 'all 2s ease';
        imagen5.style.transform = 'translateY(+725%)'

    }, 1000);
});

imagen5.addEventListener('transitionend', function() {
    FloresAmarillas.play();
    // Cuando la animación de imagen5 haya terminado, muestra imagen7
    imagen7.style.display = 'block';
    imagen5.style.display = 'none';
    //imagen6.style.transition = 'opacity 1s ease';
    imagen6.style.transition = 'all 10s ease';
    imagen6.style.transform = 'translateY(+185%)'
    texto.style.transition = 'opacity 1s ease';
    texto.style.opacity = '1'
});