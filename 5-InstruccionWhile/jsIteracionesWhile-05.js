/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let vSexo;
	do {
		vSexo = prompt("ingrese f ó m .");
	}
	while (vSexo != "f" && vSexo !="m");
	document.getElementById("txtIdSexo") = vSexo;
}//FIN DE LA FUNCIÓN