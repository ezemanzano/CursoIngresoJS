function mostrar()
{
	var vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	if (vEdad >= 18) {
		alert("Usted es mayor de edad");
	} 
	else  {
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN