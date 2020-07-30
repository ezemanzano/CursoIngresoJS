function mostrar()
{
	let vDestino;
	vDestino = document.getElementById("txtIdDestino").value;
switch (vDestino)
{
	case "Bariloche":
		alert("Oeste");
		break;
	case "Cataratas":
		alert("Norte");
		break;
	case "Ushuaia":
		alert("Sur");
		break;
	case "Mar del plata":
		alert("Este");
		break;			
}
}//FIN DE LA FUNCIÓN