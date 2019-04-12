function somar(){ 
 
    var r = ""
    var cont = 0;
     
    var n1 = document.getElementById("digiteNumero").value;
    if (n1>=0) {
        if(n1 % 2 == 0) {
            for ( var i = 0; i <= n1/2; i++){
                cont =  n1-2*i;
                r += "<br / > Número: " + cont;
            }
        }
        if(n1%2!=0){
            for (var i = 0; i <= n1/2; i++) {
 
                cont = (n1-1)-2*i;
                r += "<br/> Número: " + cont ;
            } 
        }
    }
    else r += "<br/> Informe um número maior que 0 "
 
        document.getElementById("resultado").innerHTML = r;
}