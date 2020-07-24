function mostrar()
{
	let vNota;
	vNota = Math.floor(Math.random()*10)+1;
	if (vNota >= 9) {
		alert(vNota + " Excelente");
	}
	else if (vNota >= 4) {
		alert(vNota + " Aprobó");
	}
	else {
	alert(vNota + " Vamos que la proxima se puede") ; 
	}

}