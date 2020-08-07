/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let vNum = 0;
	let vSuma = 0;
	let vMult = 1;

	do {
		if (vNum < 0) {
			vMult = vMult * vNum;
		}
		else {
			vSuma = vSuma + vNum;
		}
		vNum = parseInt(prompt("Ingresar número o basta para finalizar"));

	}
	while (!(isNaN(vNum)));
	document.getElementById("txtIdSuma").value = vSuma;
	document.getElementById("txtIdProducto").value = vMult;

}//FIN DE LA FUNCIÓN