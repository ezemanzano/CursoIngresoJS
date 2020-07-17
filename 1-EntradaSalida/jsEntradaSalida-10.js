/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var vImporte
	var vAumento
	vImporte = parseInt(document.getElementById("txtIdImporte").value) ;
	vAumento = vImporte - vImporte*0.25 ;
	document.getElementById("txtIdResultado").value = vAumento;
}
