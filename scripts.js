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