function mostrar()
{
	var vNota;
	vNota = Math.floor(Math.random()*10);
	if (vNota >= 9) {
		alert("Excelente");
	}
	else if (vNota >= 4) {
		alert("Aprobó");
	}
	else if (vNota < 4){
	alert("Vamos que la proxima se puede") ; 
}
alert(vNota);
}//FIN DE LA FUNCIÓN