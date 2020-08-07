function mostrar()
{
	let vNum;
	let Contador = 0;

	vNum = parseInt(prompt("Ingrese numero: "));

	for (i = 1; i <= vNum; i++) {
		if (vNum % i == 0) {
			Contador++;
			console.log(i);
		}
	}
	alert(Contador);
	

}//FIN DE LA FUNCIÓN