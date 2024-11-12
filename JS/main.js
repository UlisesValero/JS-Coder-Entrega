// TIENDA SUPREME



function ejecutarTienda() {
    let edad;
    let productos = [
        {
            nombre: "1- Pantalón Calavera nieve",
            precio: 200,
            cantidadElegida: 0,
        },
        {
            nombre: "2- Remera básica LOGO",
            precio: 150,
            porcentajeDescuento: 10,
            cantidadElegida: 0,
        },
        {
            nombre: "3-" + " Anteojos de sol ICON",
            precio: 100,
            porcentajeDescuento: 20,
            cantidadElegida: 0,
        }
    ]
    while (true) {
        edad = prompt("Bienvenido a Supreme, ingrese su edad.");
        if (edad === null) {
            let abandonar = confirm("¿Estás seguro que queres abandonar?");
            if (abandonar) return;
        } else if (isNaN(parseInt(edad)) || parseInt(edad) < 18) {
            alert("No tenes permitido ingresar.")
            return
        } else {
            break;
        }
    }
    while (true) {
        let textoProductos = "Ingresaste a la tienda.\nSelecciona un producto:\n";
        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            textoProductos += producto.nombre + `\n${producto.precio} USD\n`;
        }
        textoProductos += `Para hacer el checkout, ingresar "Finalizar compra"`;

        let numeroElegido = prompt(textoProductos);
        if (numeroElegido === "Finalizar compra") {
            let valorTotal = 0;
            let productosSeleccionados = false;

            for (i = 0; i < productos.length; i++) {
                valorTotal += productos[i].precio * productos[i].cantidadElegida;
                if (productos[i].cantidadElegida > 0) {
                    productosSeleccionados = true;
                }
            }
            if (!productosSeleccionados) {
                alert("¿Solo pasaste a mirar? Nos vemos.")
            } else {
                confirm(`El valor total es de ${valorTotal}USD\nClickee en "Aceptar" para abonar`);
            }
            break;
        }
        if (isNaN(parseInt(numeroElegido)) || parseInt(numeroElegido) > productos.length || parseInt(numeroElegido) < 1) {
            alert("Por favor, ingresa un número de producto válido o `Finalizar compra`.");
            continue
        }
        let productoElegido = productos[parseInt(numeroElegido) - 1];
        let nombreProducto = productoElegido.nombre.substring(3);
        productoElegido.cantidadElegida += 1;
        alert(`Agregaste ${nombreProducto} a tu carrito.`)
    }
}

