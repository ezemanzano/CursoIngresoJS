/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let vMin = 0;
	let vMax = 0;
	let vNum = 0;
	let cont = 0;

	do {

		if (cont == 1) {
			vMax = vNum;
			vMin = vNum;
		}
		cont++
		if (vNum < vMin) {
			vMin = vNum;
		} else if (vNum > vMax) {
			vMax = vNum;
		}

		vNum = parseInt(prompt("Ingresar Número"));
	}
	while (!(isNaN(vNum)));
	document.getElementById("txtIdMaximo").value = vMax;
	document.getElementById("txtIdMinimo").value = vMin;

}//FIN DE LA FUNCIÓN