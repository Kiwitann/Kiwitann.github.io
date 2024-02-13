let contadorBoton2 = 0;
let imagenes = ["No_05", "No_1", "No_2", "No_3","No_4"];
let textos = ["Ok, lo presionaste para probar, ahora dale al si", "Ya lo estas probando demasiado, dale al si","Ok, ya no hay mas, dale al si","Y le volviste a dar, ahora si dale al si","No pense que llegarias hasta aca, este si es el final"]


function funcionBoton1() {
    // Lógica para el botón 1
    document.getElementById("imagen").src = "Si.png";
    document.getElementById("boton1").innerHTML = "Sabia que ibas a decir que si cuchurrumina <3";
    document.getElementById("boton2").innerHTML = "No";

}

function funcionBoton2() {
    // Lógica para el botón 2
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
