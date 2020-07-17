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
	vDividendo = document.getElementById("txtIdNumeroDividendo").value;
	vDivisor = document.getElementById("txtIdNumeroDivisor").value;
	
	vResto = parseInt(vDividendo) % parseInt(vDivisor);
	alert("El resto es " + vResto);
}
