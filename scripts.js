$(document).ready(function(){

    $("#boton").click(function(){
        var numero = prompt("Introduzca un numero");
        var resultado;

        if(numero % 2 == 0) {
        resultado = "par";
        }
        else {
        resultado = "impar";
        }

        alert("El numero "+ numero  +" es "+resultado);
    })

    $("#palindromo").click(function(){
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
    })

    $("#boton_1").click(function(){

        $('#texto').text("Ha pulsado el BOTON 1");
        
    });

    $("#boton_2").click(function(){
        $('#texto').text("Ha pulsado el BOTON 2");
    });

    $("#boton_3").click(function(){
        $('#texto').text("Ha pulsado el BOTON 3");
    });

    $("#alReves").click(function(){
    
        var texto = $('#cajaTexto').val()

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
    });
});
