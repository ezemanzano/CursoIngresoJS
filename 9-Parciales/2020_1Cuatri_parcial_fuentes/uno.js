
function mostrar() {
	let vProducto;
	let vPrecio;
	let vCantidad;
	let vMarca;
	let vFabricante;
	let aAlc = 0;
	let aJab = 0;
	let aBar = 0;
	let cBar = 0;
	let cJab = 0;
	let cAlc = 0;
	let vPrecioAlcoholMin = 0;
	let vCantidadAlcoholMin = 0;
	let vFabricanteAlcoholMin = "No se ingresó";
	let vPromedioCompra;
	let vMayorTipo;
	let flag1 = 0;
	let flag2 = 0;

	for (let i = 0; i < 3; i++) {

		do {
			vProducto = prompt("Ingrese Producto: ");
		}
		while (!(vProducto == "jabon" || vProducto == "barbijo" || vProducto == "alcohol"));

		do {
			vPrecio = parseInt(prompt("Ingrese Precio: "));
		}
		while (!(vPrecio >= 100 && vPrecio <= 300));

		do {
			vCantidad = parseInt(prompt("Ingrese cantidad: "));
		}
		while (vCantidad < 0 || vCantidad > 1000);

		vMarca = prompt("Ingrese marca: ");
		vFabricante = prompt("Ingrese Fabricante: ");


		if (vProducto == "alcohol") {
			aAlc = aAlc + vCantidad;
			cAlc++;
			if (flag1 == 0 || vPrecio < vPrecioAlcoholMin) {
				vPrecioAlcoholMin = vPrecio;
				vCantidadAlcoholMin = vCantidad;
				vFabricanteAlcoholMin = vFabricante;
				flag1 = 1
			}

		} else if (vProducto == "barbijo") {
			aBar = aBar + vCantidad;
			cBar++;
		} else {
			aJab = aJab + vCantidad;
			cJab++;
		}


	}

	if ((aAlc > aBar) && (aAlc > aJab)) {
		vMayorTipo = "Alcohol" ;
		vPromedioCompra = (aAlc/cAlc);
	}
	else if ((aBar > aJab) && (aBar >= aAlc)) {
		vMayorTipo = "Barbijo";
		vPromedioCompra = (aBar/cBar);

	}
	else {
		vMayorTipo = "Jabon";
		vPromedioCompra = (aJab/cJab);	
	}

	alert("El Precio minimo es: "+ vPrecioAlcoholMin+ "La cantidad es: "+ vCantidadAlcoholMin + "y su fabricante es: " + vFabricanteAlcoholMin);
	alert("El producto con mas unidades es:  "+vMayorTipo + " Y su promedio es: "+vPromedioCompra);
	alert("La cantidad de jabones es: " + cJab);
}
	//alert("El Precio minimo es: "+ vPrecioAlcoholMin+ "La cantidad es: "+ vCantidadAlcoholMin + "y su fabricante es: " + vFabricanteAlcoholMin);


