function resultado() {
  var fTemp = document.getElementById("Numero1").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F - ' + fToCel + '\xB0C.';
    
   document.getElementById ("resposta").innerHTML = message;

}