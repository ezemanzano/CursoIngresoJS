function mostrar()
{
	let vNum;
	let vCont = 0;
	let vSuma = 0;
	

	do {
		vNum = parseInt(prompt("Ingresar Numero "));
		vSuma = vNum + vSuma;
		vCont++;
		
	}
	while (vCont<5) ;
	document.getElementById("txtIdSuma").value = vSuma ;
	document.getElementById("txtIdPromedio").value	 = (vSuma/5) ;
	
	
}//FIN DE LA FUNCIÓN