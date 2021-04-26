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