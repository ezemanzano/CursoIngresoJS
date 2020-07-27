function mostrar() {
	let vHora;
	vHora = parseInt(document.getElementById("txtIdHora").value);
	if (vHora<24)
	{
		switch (vHora) {
			
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
			case "12":
				alert("Es de Mañana");
				break;
			case "13":
			case "14":
			case "15":
			case "16":
			case "17":
			case "18":
			case "19":
				alert("Es de tarde")
				break;
	
			default:
				alert("Es de noche");
	
	
	
		}
		
	}
	else
	{
		alert("no es una hora válida");
	}
}//FIN DE LA FUNCIÓN