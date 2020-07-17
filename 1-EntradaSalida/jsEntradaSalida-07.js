/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var vNum1;
	var vNum2;
	var vRes;
	
function sumar()
{	
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 + vNum2;
	alert(vRes);	
}

function restar()
{
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 - vNum2;
	alert(vRes);
}

function multiplicar()
{ 
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 * vNum2;
	alert(vRes);
}


function dividir()
{
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 / vNum2;
	alert(vRes);
}


