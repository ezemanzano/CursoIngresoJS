/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let vNum = 0;
	let vSuma = 0;
	let vCont = 0;
	let vProm;
	do {
		
		vSuma = vNum + vSuma;
		vCont++;
		vNum = parseInt(prompt("Ingresar Numero"));
	}
	
	while (!(isNaN(vNum))) ;
	document.getElementById("txtIdSuma").value = vSuma ;
	vProm= vSuma/(vCont-1);
	document.getElementById ("txtIdPromedio").value = vProm;

}//FIN DE LA FUNCIÓN