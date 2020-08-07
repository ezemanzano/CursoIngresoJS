function mostrar() {
  let tipo;
  let cantidad;
  let precio;
  let dto;
  let acumCantidad = 0;
  let precioBruto = 0;
  let preciodto;
  let aArena = 0;
  let aCal = 0;
  let aCem = 0;
  let flag = 0;
  let mayorTipo;
  let tipoCaro;
  let precioCaro;
  respuesta = "s";
  do {
    do {
      tipo = prompt("Ingrese tipo: ");
    } while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));
    cantidad = parseInt(prompt("Ingrese cantidad de bolsas: "));
    do {
      precio = parseInt(prompt("Ingrese precio: "));
    } while (precio <= 0)
    respuesta = prompt("Desea continuar? s/n");

    acumCantidad = acumCantidad + cantidad;
    precioBruto = (precio * cantidad) + precioBruto;
    switch (tipo) {
      case "arena":
        aArena = aArena + cantidad;
        break;
      case "cal":
        aCal = aCal + cantidad;
        break;
      case "cemento":
        aCem = aCem + cantidad;
        break;

    }
    if (flag == 0 || precio>  precioCaro) {
      precioCaro = precio ;
      tipoCaro = tipo ;
      flag = 1;
   
    }
  } while (respuesta == "s");

  if (acumCantidad >= 10 && acumCantidad < 30) {
    dto = 0.85;
  } else if (acumCantidad >= 30) {
    dto = 0.75;
  } else {
    dto = 1
  }

  if (aArena>aCal && aArena>aCem) {
    mayorTipo = "Arena";
  } else if (aCal>=aArena && aCal>aCem ) {
    mayorTipo = "Cal";
  } else {
    mayorTipo = "Cemento";
  }
  alert(tipoCaro);
  //alert(precioBruto);
  //alert((precioBruto*dto)) 
  //alert(mayorTipo);
}
