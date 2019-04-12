function resultado() {
    var text = ""
    var cont=0;
    var n1 = document.getElementById("Numero1").value;
    var n2 = document.getElementById("Numero2").value;
     
   for (var i = 0; i <= (n2-n1); i++) {
    
    cont+=i+2;
  
     
     }  
    text += "<br/> Resultado: " + cont;  
  
    document.getElementById ("resposta").innerHTML = text;
  
 }