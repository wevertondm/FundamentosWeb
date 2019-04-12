function resultado() {
   var text = ""
   var cont=0;var b=0; var a=0; var r=0; var B=0;
   var cod = document.getElementById("Numero1").value;
    
   if(cod == 1){
    b = prompt ("Digite o valor da base do retangulo");
    a = prompt ("Digite o valor da altura do retangulo");
    cont= b*a;
    
   text += "<br/> Resultado: " + cont;
}
   if (cod == 2){
    b = prompt ("Digite o valor da base do triângulo");
    a = prompt ("Digite o valor da altura do triângulo");
    cont= (b*a)/2;
    
   text += "<br/> Resultado: " + cont;
}
   if (cod == 3){
    r = prompt ("Digite o valor dp raio do circulo");
     
    cont= Math.PI*Math.pow(r, 2);
    
   text += "<br/> Resultado: " + cont;
 
}
   if (cod == 4){
    b = prompt ("Digite o valor da base menor do trapézio");
    B = prompt ("Digite o valor da base maior do trapézio");
    a = prompt ("Digite o valor da altura do trapezio");
     
    cont=  [(B+b)*a]/2;
    
   text += "<br/> Resultado: " + cont;
 
}
 
   document.getElementById ("resposta").innerHTML = text;
}