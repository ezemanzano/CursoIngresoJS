/* en Invierno: bariloche  aumento del 20% cataratas y Cordoba descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche  descuento del 20% cataratas y Cordoba tiene un aumento del 10%
 Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar() {
	let vDestino;
	let vEstacion;
	let vTarifa = 15000;
	let vPrecio;
	vDestino = document.getElementById("txtIdDestino").value;
	vEstacion = document.getElementById("txtIdEstacion").value;

	switch (vEstacion) {
		case "Invierno":
			if (vDestino == "Bariloche") {
				vPrecio = vTarifa * 1.20;
			}
			else if (vDestino == "Mar del plata") {
				vPrecio = parseInt(vTarifa * 0.80);
			}
			else {
				vPrecio = vTarifa * 0.90;
			}
			alert("El precio es " + vPrecio);
			break;
		case "Verano":
			if (vDestino == "Cordoba") {
				vPrecio = vTarifa;
			}
			else if (vDestino == "Bariloche") {
				vPrecio = parseInt(vTarifa * 0.90);
			}
			else {
				vPrecio = vTarifa * 1.10;
			}
			alert("El precio es " + vPrecio);
			break;
		case "Otoño":
		case "Primavera":
			if (vDestino != "Cordoba") {
				vPrecio = vTarifa * 1.10;
				alert("El precio es "+ vPrecio);
			}
			else {
				alert("El precio es " + vTarifa);
			}
			break;
		default:
			alert("Este caso no está contemplado");
	}

}//FIN DE LA FUNCIÓN