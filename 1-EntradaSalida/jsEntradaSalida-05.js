/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var vEdad;
	var vNombre;
	vNombre = document.getElementById("txtIdNombre").value ;
	vEdad = document.getElementById("txtIdEdad").value;
	 // alert("Usted se llama " +vNombre +" y tiene " +vEdad +" años");

	alert(`Usted se llama ${vNombre} y tiene ${vEdad} años`)

	// Hay dos formas de concatenar, cualquiera de las dos son correctas.
}

