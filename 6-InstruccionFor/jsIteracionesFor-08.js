function mostrar()
{
	let vNum;
	let Contador = 0;


	vNum = parseInt(prompt("Ingrese numero: "));

	for (i = 1; i <= vNum; i++) {
		if (vNum % i == 0) {
			Contador++;
		}
	}
	if (Contador == 2) {
		alert("El número es primo")
	}
	else {
		alert ("El número no es primo")
	}
	
}//FIN DE LA FUNCIÓN