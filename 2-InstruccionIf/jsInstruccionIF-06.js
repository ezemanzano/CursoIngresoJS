function mostrar()
{
	var vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	if (vEdad >= 18) {
		alert("Usted es mayor de edad");
	}
	else if (vEdad >= 13 && vEdad <= 17)
	{
		alert("usted es adolescente");
	}
	else if (vEdad < 13) {
	alert("Usted es un niño");
}

}//FIN DE LA FUNCIÓN