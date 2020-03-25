var bandera = true;

function valida(campo) {
    var bRet = false;
    if (campo.value == "") {
        mostrarResultado("Faltan datos");
    } else if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)) {
        mostrarResultado("No tiene formato de RFC");
    } else {
        bRet = true;
    }
    bandera = false;
    return bRet;
}

function mostrarResultado(mensaje) {
    if (bandera) {
        mensaje = document.createTextNode(mensaje);
        var h2 = document.createElement('h2');
        h2.setAttribute('id', 'mensaje-resultado');
        h2.appendChild(mensaje);
        document.body.appendChild(h2);
    } else {
        var h2 = document.getElementById('mensaje-resultado');
        h2.innerText = mensaje;
    }

}