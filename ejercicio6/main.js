const iva = (21/100); 
    let precio= parseFloat(prompt("Introduce el precio de un producto"));
        
    let precioFinal = precio+(precio*iva);
 
    console.log(`El precio final es: ${precioFinal}`);
    document.write(`El precio final es: ${precioFinal}`);