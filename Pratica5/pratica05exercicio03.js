function start() {
    var form = document.getElementByID("formulario");
    var captura = form.numero.value;
    var test = captura % 2;
    if (test == 0){
        form.resposta.value = "Número Par";
    } else {
        form.resposta.value = "Número Impar";
    }
}
 