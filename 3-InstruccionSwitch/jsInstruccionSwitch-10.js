function mostrar() {
	let vDestino;
	let vEstacion;
	let vEstado = "Esta ciudad no está contemplada";
	const SE = "Se viaja";
	const NO = "No se viaja";
	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;

	switch (vEstacion) {
		case "Invierno":
			if (vDestino != "Bariloche") {
				vEstado = NO;
			}
			else {
				vEstado = SE;
			}
			break;
		case "Verano":
			if ((vDestino == "Bariloche") || (vDestino == "Cordoba")) {
				vEstado = NO;
			}
			else {
				vEstado = SE;
			}
			break;
		case "Otoño":
			vEstado = SE;
			break;
		case "Primavera":
			if (vDestino != "Bariloche") {
				vEstado = SE;
			}
			else {
				vEstado = NO;
			}
			break;
		default:
			alert("Esta estación no está contemplada");
			break;


	}
	alert(vEstado);

}//FIN DE LA FUNCIÓN