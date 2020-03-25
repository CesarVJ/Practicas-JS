function invocarScript() {
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
    var resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    mostrar(resultado);
}

function mostrar(resultado) {
    resultado = document.createTextNode(resultado);
    var h2 = document.createElement('h2');
    h2.appendChild(resultado);
    document.body.appendChild(h2);
}