/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	
	
function sumar()
{	
	let vNum1;
	let vNum2;
	let vRes;
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 + vNum2;
	alert(vRes);	
}

function restar()
{
	let vNum1;
	let vNum2;
	let vRes;
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 - vNum2;
	alert(vRes);
}

function multiplicar()
{ 
	let vNum1;
	let vNum2;
	let vRes;
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	vRes = vNum1 * vNum2;
	alert(vRes);
}


function dividir()
{
	let vNum1;
	let vNum2;
	let vRes;
	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum2 = document.getElementById("txtIdNumeroDos").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt(vNum2);
	if(vNum2==0) {
	alert("No se puede divir por cero");
}
	else {
	vRes = vNum1 / vNum2;
}
	alert(vRes.toFixed(2));
}


