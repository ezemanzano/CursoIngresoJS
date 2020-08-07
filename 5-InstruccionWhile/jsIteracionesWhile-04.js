/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var vNum;
	
	do {
		vNum = prompt("ingrese un número entre 0 y 10.");
		
	} while (vNum>9) ;
		document.getElementById("txtIdNumero").value = vNum ;
	
	
}//FIN DE LA FUNCIÓN