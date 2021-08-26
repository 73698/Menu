var platillo = "Nachos"
var bebida = "Soda"
var cant = 2
var cant2 = 2
var pregunta = "Si"

 

switch (platillo){
    case "Nachos":
        console.log("Usted eligió nachos")
    console.log("¿Cuántos ordenes de nachos desea pedir?")
    if (cant = 2){
        console.log(" 2 Ordenes pedidas")
        var precio =30
    var cantP = (precio*cant)

    }else {
        console.log ("debe pedir una cantidad")
    }
    console.log ("¿Desea alguna bebida?")
    if (pregunta = "Si"){
        switch (bebida){
            case "Agua natutal":
                console.log("Usted eligió Agua natural")
            console.log("¿Cuántos vasos de agua desea pedir?")
            if (cant = 2){
                var precio = 15
                var cantA = ( precio * cant)
                console.log (cant)
                
                console.log(" 2 Ordenes pedidas")
                console.log("el total a pagar es: ",cantF)
            
            
            }else {
                console.log ("debe pedir una cantidad")
            }
            break;
            case "Soda":
                console.log("Usted eligió Soda")
                console.log("¿Cuántas sodas desea pedir?")
                if (cant = 2){
                    console.log(" 2 Ordenes pedidas")
                var precio =30
                var cantA = (precio*cant)
                var cantF = (cantP+cantA)
                console.log("el total a pagar es: ",cantF)
                }else {
                    console.log ("debe pedir una cantidad")
                }
                break;
                case "Cerveza":
                    console.log("Usted eligió Cerveza")
                    console.log("¿Cuántos cervezas desea pedir?")
                    if (cant = 2){
                        console.log(" 2 Ordenes pedidas")
                    var cantB = (45*cant)
                    var cantF = (cantP+cantB)
                    console.log("el total a pagar es: ",cantF)
                    }else {
                        console.log ("debe pedir una cantidad ")
                    }
                    break;
                
        }

    }
    break;
    case "Pizzas":
        console.log("¿Cuántas pizzas desea pedir?")
        break;
        case "Tacos":
            console.log("¿Cuántos tacos desea pedir?")
            break;          
}


