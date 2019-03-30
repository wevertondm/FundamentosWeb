function ImpaPar() {
    var from=document.getElementById("primeiroNumero").value;
    var n1 = from % 2;
    if (n1 == 0){
        document.getElementById("resposta").innerHTML= "PAR";
    } else {
        document.getElementById("resposta").innerHTML= "IMPAR";
    }
    document.getElementById("resposta").innerHTML += "---- " + from;
}
