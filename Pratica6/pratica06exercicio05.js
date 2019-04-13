function minhaFuncao (){ 
	var i, vet = new Array (); 
	vet[0] = document.getElementById ("num1").value * 0.9; 
	vet[1] = document.getElementById ("num2").value * 0.9;
	vet[2] = document.getElementById ("num3").value * 0.9;
	vet[3] = document.getElementById ("num4").value * 0.9;
	vet[4] = document.getElementById ("num5").value * 0.9;
	for (i = 0; i < vet.length; i++) {
		document.getElementById ("resp").innerHTML += "vet[" + i + "] = " + vet[i] + "<br/>"; 
	} 
	document.getElementById ("resp").innerHTML += "<br/><br/>"; 
} 