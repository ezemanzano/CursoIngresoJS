function mostrar() {
	switch (mesDelAño = txtIdMes.value) {

		case 'Febrero':
			alert("29 días");
			break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			alert("30 días");
			break;
		default:
			alert("31 días");
			break;

	}


}//FIN DE LA FUNCIÓN