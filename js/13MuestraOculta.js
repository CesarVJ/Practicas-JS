function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_' + id);
    var enlace = document.getElementById('enlace_' + id);

    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
        enlace.innerHTML = 'Mostrar contenidos';
    } else {
        elemento.style.display = "block";
        enlace.innerHTML = 'Ocultar contenidos';
    }
}
var bandera = false;

function ocultarTodo() {
    bandera = !bandera;
    muestraOculta('1');
    muestraOculta('2');
    muestraOculta('3');
    let boton = document.getElementById('boton-invocacion');
    if (bandera) {
        boton.setAttribute('value', 'Mostrar todo');
    } else {
        boton.setAttribute('value', 'Ocultar todo');
    }
}