let contadorBoton2 = 0;
let imagenes = ["No_05", "No_1", "No_2", "No_3","No_4"];
let textos = ["Ok, lo presionaste para probar, ahora dale al si", "Ya lo estas probando demasiado, dale al si","Ok, ya no hay mas, dale al si","Y le volviste a dar, ahora si dale al si","No pense que llegarias hasta aca, este si es el final"]

var audioNo = document.getElementById("audioNo");
var audioSi = document.getElementById("audioSi");

let conNo=0;

var sonidoBoton2EnReproduccion = false;

function reproducirSonidoNo() {
    audioNo.pause(); // Pausa el sonido del botón 1 si está reproduciéndose
    audioNo.currentTime = 0; // Reinicia el tiempo de reproducción
    audioNo.play(); // Reproduce el sonido del botón 1
}

function reproducirSonidoSi() {
    if (!sonidoBoton2EnReproduccion) {
        audioSi.pause(); // Pausa el sonido del botón 2 si está reproduciéndose
        audioSi.currentTime = 0; // Reinicia el tiempo de reproducción
        audioSi.play(); // Reproduce el sonido del botón 2
        sonidoBoton2EnReproduccion = true; // Indica que el sonido del botón 2 está en reproducción
    }
}

function funcionBoton1() {
    // Lógica para el botón 1
    console.log("Haciendo clic en Botón 1");
    reproducirSonidoSi();
    document.getElementById("imagen").src = "Si.png";
    document.getElementById("boton1").innerHTML = "Sabía que ibas a decir que sí cuchurrumina <3";
    document.getElementById("boton2").innerHTML = "No";
    if (sonidoBoton2EnReproduccion) {
        audioNo.pause(); // Pausa el sonido del botón 1 si está reproduciéndose
        sonidoBoton2EnReproduccion = false; // Resetea la variable
    }
}

function funcionBoton2() {
    // Lógica para el b
    if (conNo<1){
        reproducirSonidoNo();
        conNo++;

    }



    if (contadorBoton2 < 5) { // Cambia el número 5 según la cantidad deseada de repeticiones
        // Cambiar la imagen
        document.getElementById("imagen").src = imagenes[contadorBoton2] + ".png"; // Cambia "NuevaImagen" por el prefijo de tus imágenes
        
        // Cambiar el texto del botón 2
        document.getElementById("boton2").innerHTML = textos[contadorBoton2];

        contadorBoton2++; // Incrementa el contador
    } else {
        alert("Este si es el final de verdad Cicia, ya no le des jaja");
    }
}
