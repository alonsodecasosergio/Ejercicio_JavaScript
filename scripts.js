function parImpar() {
    var numero = prompt("Introduzca un numero");
    var resultado;

    if(numero % 2 == 0) {
      resultado = "par";
    }
    else {
      resultado = "impar";
    }

    alert("El numero "+ numero  +" es "+resultado);
}

function palindromo(){

    var frase = prompt("Introduzca una frase");

    var cadenaMinus = frase.toLowerCase();
    var cadenaSinEspacios = cadenaMinus.split("");

    var cadena = "";
    for(i in cadenaSinEspacios) {

        if(cadenaSinEspacios[i] != " ") {
            cadena += cadenaSinEspacios[i];
        }
    }

    var cadenaReves = cadena.split("").reverse();

    var palindromo = true;

    for(i in cadena){

        if(cadenaReves[i] != cadena[i]){
            palindromo = false;
        }
    }

    if(palindromo){
        alert("La frase: " + frase + " es un palindromo ");
    }else{
        alert("La frase: " + frase + " NO es un palindromo");
    }
}

function botonPulsado(comp){

    var id = comp.id;

    if(id === "boton_1"){
        document.getElementById("texto").innerHTML= 'Ha pulsado el BOTON 1';
    }

    if(id === "boton_2"){
        document.getElementById("texto").innerHTML= 'Ha pulsado el BOTON 2';
    }

    if(id === "boton_3"){
        document.getElementById("texto").innerHTML= 'Ha pulsado el BOTON 3';
    }

}

function textoAlReves(){

    var texto = document.getElementById("cajaTexto").value;

    var cadenaMinus = texto.toLowerCase();
    var cadenaSinEspacios = cadenaMinus.split("");

    var cadena = "";
    for(i in cadenaSinEspacios) {

        if(cadenaSinEspacios[i] != " ") {
            cadena += cadenaSinEspacios[i];
        }
    }

    var cadenaReves = cadena.split("").reverse();

    var resultado = "";
    for(i in cadenaReves){
        resultado += cadenaReves[i].toString();
    }

    alert("El texto dado la vuelta es: " + resultado);

}