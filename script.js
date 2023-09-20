const image = document.getElementById('movingImage');
let corner = 0; // Variable para rastrear la esquina actual

image.addEventListener('click', () => {
    switch (corner) {
        case 0:
            image.style.top = '0';
            image.style.left = '0';
            break;
        case 1:
            image.style.top = '0';
            image.style.left = 'calc(100% - 100px)';
            break;
        case 2:
            image.style.top = 'calc(100% - 100px)';
            image.style.left = 'calc(100% - 100px)';
            break;
        case 3:
            image.style.top = 'calc(100% - 100px)';
            image.style.left = '0';
            break;
    }

    corner = (corner + 1) % 4; // Avanza a la siguiente esquina
});