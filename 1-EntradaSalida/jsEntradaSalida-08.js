/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var vDividendo;
	var vDivisor;
	var vResto;
	vDividendo = parseFloat(document.getElementById("txtIdNumeroDividendo").value);
	vDivisor = parseFloat(document.getElementById("txtIdNumeroDivisor").value);
	
	vResto = vDividendo % vDivisor;
	alert("El resto es " + vResto.toFixed(2));
}
