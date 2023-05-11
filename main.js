let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("¡Bienvenidx " + nombreUsuario + "!");
}

function calcular_prestamo(monto, cuotas) {

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo = 0;

    if (monto > 0 && cuotas == 3) {
        prestamo = monto + (monto * 0.30);
        return prestamo
    }
    else if (monto > 0 && cuotas == 6) {
        prestamo = monto + (monto * 0.50);
        return prestamo
    }
    else if (monto > 0 && cuotas == 12) {
        prestamo = monto + (monto * 0.70);
        return prestamo
    }
    else if (monto > 0 && cuotas == 1) {
        return monto
    }

}

function es_socio(prestamo, estado_usuario) {

    if (estado_usuario == "SI") {
        //ES SOCIO//
        let descuento = prestamo * 0.20;
        return descuento

    }
    else {
        return 0
    }

}


//PRESTAMO/

console.log("Bienvenido/a prestamo YA");

let monto = "";

while (monto != "SALIR") {

    monto = prompt("Ingrese el monto que desea o ingrese SALIR para finalizar");

    if (monto != "SALIR") {
        let estado_usuario = prompt("Es socio: SI o NO");
        let cuotas = prompt("En cuantas cuotas: 1,  3 , 6 o 12");

        let prestamo_total = calcular_prestamo(monto, cuotas);
        let resultado_desc = es_socio(prestamo_total, estado_usuario);

        console.log("Datos del prestamo");
        console.log("Ustedes pidio: ", monto);
        console.log("Cuotas: ", cuotas);
        console.log("Total: ", prestamo_total);
        console.log("Descuento por Socio: ", resultado_desc);
        console.log("Monto final: ", prestamo_total - resultado_desc); 

    




    }
}
