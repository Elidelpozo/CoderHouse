for (let i= 1; i<=3; i++){
    let producto = prompt("Ingresar producto:");
    console.log(i+ "-"+ producto)  
}

let precioCosto;
let precioVenta;

function rentabilidad(precioCosto,precioVenta){
    precioCosto = parseFloat(prompt("Ingresar Costo: "));
        precioVenta = parseFloat(prompt("Ingresar precio venta: "));
        if (precioCosto > precioVenta){
            alert("Atencion! " + "tu rentabilidad es de : $ "+(precioVenta - precioCosto) + " subir precios urgente");
        }
        else{
            alert("Tu rentabilidad es de: $"+(precioVenta - precioCosto));
        }
}
function porcentaje(rentabilidad, precioCosto){
    return ((rentabilidad*100)/precioCosto)
}

let producto2 = (prompt("Que producto de la lista quieres analizar?: "))



switch(producto2){
    case "1":
        
         rentabilidad(precioCosto,precioVenta);
         console.log("el porcentaje de rentabilidad es de :%"+porcentaje(rentabilidad,precioCosto));
 
        break;
    case "2":
        
        rentabilidad(precioCosto,precioVenta);
        break;
    case "3":
       
        rentabilidad(precioCosto,precioVenta);
        break;
    default:
        console.log("No encontramos el producto en nuestra base de datos.")
}

