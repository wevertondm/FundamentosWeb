function resultado() {
   var text = ""
   var cont=0;
   var n1 = document.getElementById("Numero1").value;
   c = (4 * 3,14 * Math.pow(n1, 3)) / 3;

   
     
   text += "<br/> Resultado: " + c;  

   document.getElementById ("resposta").innerHTML = text;

}