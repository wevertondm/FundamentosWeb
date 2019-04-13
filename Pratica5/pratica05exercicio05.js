function resultado() {
   var text = ""
   var cont=0;
    
   var n1 = document.getElementById("Numero1").value;
   var n2 = document.getElementById("Numero2").value;
    
    if(n1>=0 && n2>=0){
        cont =  Math.log10(n1) / Math.log10(n2);
    
        text += "<br/> Resultado: " + cont;
 
    }
     
 
    else text += "<br/> Entrada invalida ";
    document.getElementById ("resposta").innerHTML = text;
}