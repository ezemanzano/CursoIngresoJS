
function mostrar() {
	
	let ContP;
	let ContN;
	let vNumI = 0;
	let SumaNeg = 0;
	let SumaPos = 0;
	let Ceros = 0	;
	let ContadorPos = 0;
	let ContadorNeg = 0;
	let Par;
	let vCantPares = 0;
	let vCantImp = 0;
	let PromPos = 0;
	let PromNeg = 0;
	let DifTotal;


	while (!(isNaN(vNumI))) {

		vNumI = parseInt(prompt("Ingrese Número:"));
		
		if (vNumI < 0) {
			SumaNeg = SumaNeg + vNumI;
			ContadorNeg = ContadorNeg + 1
			Par = (-(vNumI) % 2);
		}
		else if (vNumI > 0 ) {
			SumaPos = SumaPos + vNumI;
			ContadorPos = ContadorPos + 1
			Par = (vNumI % 2);
		}
		else if (vNumI == 0) {
			Ceros = Ceros + 1 ;
			Par = null;
		}
		else {
			Par = null;
		} 
			
		if (Par == 0) {
			vCantPares = vCantPares + 1;
		}
		else if (Par == 1) {
			vCantImp = vCantImp + 1;
		}
	}

	PromNeg = (SumaNeg / ContadorNeg);
	PromPos = (SumaPos / ContadorPos);
	DifTotal = SumaPos - (-SumaNeg);
	document.write("la suma de negativos es :" + SumaNeg);
	document.write("<br>");
	document.write("Cantidad de negativos es: " + ContadorNeg);
	document.write("<br>");
	document.write("la suma de positivos es: " + SumaPos);
	document.write("<br>");
	document.write("Cantidad de positivos es: " + ContadorPos);
	document.write("<br>");
	document.write("Cantidad de Ceros: " + Ceros);
	document.write("<br>");
	document.write("Cantidad de Impares es: " + vCantImp);
	document.write("<br>");
	document.write("Cantidad de pares es: " + vCantPares);
	document.write("<br>");
	document.write("Promedio de Negativos es: " + PromNeg);
	document.write("<br>");
	document.write("Rromedio de positivos es: " + PromPos);
	document.write("<br>");
	document.write("La diferencia entre pos y neg es: " + DifTotal);

}//FIN DE LA FUNCIÓN