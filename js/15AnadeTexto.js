contador = 3;

function anade() {
    var elemento = document.createElement("li");
    var lista = document.getElementById("lista");
    var nuevoElemento = "<li>Elemento " + (++contador) + "</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
}