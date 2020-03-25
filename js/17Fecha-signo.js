function validaFechaMenor(campo) {
    var bRet = false;
    var dHoy = new Date();
    var dCapt = null;
    if (campo.value == "")
        alert("Faltan datos");
    else {
        dCapt = validaFecha(campo.value);
        if (dCapt != null && dCapt < dHoy)
            bRet = true;
        else
            alert("La fecha debe ser menor a la fecha actual");
    }
    return bRet;
}

function validaFecha(valor) {
    var dConvertida = null;
    var sAnio = "";
    var sMes = "";
    var sDia = "";
    var nAnio = 0,
        nMes = 0,
        nDia = 0;
    alert(valor);

    //2020-03-12
    if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)) {
        nAnio = parseInt(valor.substring(0, 4), 10);
        nMes = parseInt(valor.substring(5, 7), 10);
        nDia = parseInt(valor.substring(8, 10), 10);

        if (nDia < 1 || nDia > 31)
            alert("El día no es válido")
        else {
            if (nMes < 1 || nMes > 12)
                alert("El mes no es válido");
            else {
                if ((nMes == 1 || nMes == 3 || nMes == 5 || nMes == 7 ||
                        nMes == 8 || nMes == 10 || nMes == 12) && nDia > 31)
                    alert("El mes tiene máximo 31 días");
                else if ((nMes == 4 || nMes == 6 || nMes == 9 ||
                        nMes == 11) && nDia > 30)
                    alert("El mes tiene máximo 30 días");
                else if ((nMes == 2) && ((nDia > 29) || (nAnio % 4 != 0 && nDia > 28)))
                    alert("Febrero tiene 28 días o 29 en bisiesto");
                else {
                    dConvertida = new Date();
                    dConvertida.setFullYear(nAnio, nMes - 1, nDia);
                } //fin validaci�n día-mes
            } //mes válido
        } //día válido
        creasigno(nDia, nMes);
    } //formato válido
    else {
        alert("No tiene formato de fecha");
    }
    return dConvertida;
}

function creasigno(nDia, nMes) {

    var newDiv = document.createElement("div");
    var numSuerte;
    var colorRepresentativo;
    if ((nDia > 20) && (nMes == 3) || (nDia <= 20) && (nMes == 4)) {
        var newContent = document.createTextNode("SIGNO ARIES");
        numSuerte = 11;
        colorRepresentativo = 'green';
    } else if ((nDia > 20) && (nMes == 4) || (nDia <= 20) && (nMes == 5)) {
        var newContent = document.createTextNode("SIGNO TAURO");
        numSuerte = 21;
        colorRepresentativo = 'orange';
    } else if ((nDia > 20) && (nMes == 5) || (nDia <= 20) && (nMes == 6)) {
        var newContent = document.createTextNode("SIGNO GEMINIS");
        numSuerte = 19;
        colorRepresentativo = '#D7D7BD'; //Celeste
    } else if ((nDia > 20) && (nMes == 6) || (nDia <= 22) && (nMes == 7)) {
        var newContent = document.createTextNode("SIGNO CANCER");
        numSuerte = 22;
        colorRepresentativo = 'white';
    } else if ((nDia > 22) && (nMes == 7) || (nDia <= 23) && (nMes == 8)) {
        var newContent = document.createTextNode("SIGNO LEO");
        numSuerte = 13;
        colorRepresentativo = '#252850';
    } else if ((nDia > 23) && (nMes == 8) || (nDia <= 22) && (nMes == 9)) {
        var newContent = document.createTextNode("SIGNO VIRGO");
        numSuerte = 13;
        colorRepresentativo = '#cda434';
    } else if ((nDia > 22) && (nMes == 9) || (nDia <= 22) && (nMes == 10)) {
        var newContent = document.createTextNode("SIGNO LIBRA");
        numSuerte = 19;
        colorRepresentativo = 'red';
    } else if ((nDia > 22) && (nMes == 10) || (nDia <= 22) && (nMes == 11)) {
        var newContent = document.createTextNode("SIGNO ESCORPIO");
        numSuerte = 10;
        colorRepresentativo = '#572364';
    } else if ((nDia > 22) && (nMes == 11) || (nDia <= 21) && (nMes == 12)) {
        var newContent = document.createTextNode("SIGNO SAGITARIO");
        numSuerte = 29;
        colorRepresentativo = 'yellow';
    } else if ((nDia > 21) && (nMes == 12) || (nDia <= 21) && (nMes == 1)) {
        var newContent = document.createTextNode("SIGNO CAPRICORNIO");
        numSuerte = 19;
        colorRepresentativo = 'pink';
    } else if ((nDia > 21) && (nMes == 1) || (nDia <= 21) && (nMes == 2)) {
        var newContent = document.createTextNode("SIGNO ACUARIO");
        numSuerte = 10;
        colorRepresentativo = '#722f37';
    } else if ((nDia > 22) && (nMes == 21) || (nDia <= 23) && (nMes == 3)) {
        var newContent = document.createTextNode("SIGNO PICIS");
        numSuerte = 29;
        colorRepresentativo = '#e3e4e5';
    }


    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(newContent); //añade texto al div creado.
    var h3 = document.createElement('h3');
    numSuerte = document.createTextNode(`Tu número de la suerte es el ${numSuerte}`);
    h3.appendChild(numSuerte);
    h3.style = "display:inline-block;";
    newDiv.appendChild(h3);

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
    newDiv.style = `border: 3px solid #999999; background-color:${colorRepresentativo}; width: 200px ;height:300px; display:inline-block; margin:10px; `;


}

function generarNumSuerte() {

}