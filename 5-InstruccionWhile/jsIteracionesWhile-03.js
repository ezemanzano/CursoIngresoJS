/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let vClave;
	const Password = "utn750";
	
	do {
		vClave = prompt("ingrese el número clave.");
	}
	while (Password != vClave) ; 
	alert("ingresó");
	
	
	
	/*while (Password != vClave){
	vClave = prompt("ingrese el número clave.");
	 }
	 alert ("Ingresó");
	 */
}
