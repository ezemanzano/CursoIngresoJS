/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var vNum1;
	var vNum2;
	var vRes;
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vRes = parseInt(vNum1) + parseInt(vNum2);

	/* También se puede resolver haciendo
	vRes = parseInt(vNum1) + parseInt (vNum2) ;
	*/


	alert("el resultado es: " +vRes);
}

