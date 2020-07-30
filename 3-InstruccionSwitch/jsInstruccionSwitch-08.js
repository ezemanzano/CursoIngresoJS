function mostrar()
{
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;
switch (vDestino)
{
	case "Bariloche":
	case "Ushuaia":
		alert("FRIO");
		break;
	case "Cataratas":
	case "Mar del plata":
		alert("CALOR");
		break;
	default :
	alert ("Esta ciudad no está contemplada")
	break;
	
	
}
}//FIN DE LA FUNCIÓN