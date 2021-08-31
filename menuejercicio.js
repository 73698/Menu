var optPlatillo = "";
var optBebida = "";
var cantPlatillo = 0;
var catBebida = 0;
var cantrespuesta =""
var i = 0;
var totalComida = 0;

cantrespuesta = prompt("¿Cuántos platillos diferentes desea pedir?" );
cantrespuesta =parseInt(cantrespuesta);
while (i<=cantrespuesta){
   
    optPlatillo = prompt("Menú \n Selesccione la opción de su agrado: \n1. Hamburguesa de res ($40) \n2. Hotdog ($30) \n3.Papas Fritas($25 la orden)");
cantPlatillo =  prompt("Cuantas ordenes de este platillo requiere");
cantPlatillo = parseInt(cantPlatillo);

optBebida = prompt("Menú \n Selesccione la opción de su agrado: \n1 Agua Natural  ($20) \n2. Soda ($30)\n3 Cerveza($45)");
cantBebida =  prompt("Cuantas ordenes de este platillo requiere");
cantBebida = parseInt(cantBebida);




//                     Platillos
    
switch(optPlatillo){
    case"1":
    //Hamburguesa 40
    totalComida +=40*cantPlatillo;
    


    break;
    case"1":
    //Hodgog 30
    totalComida +=30*cantPlatillo;
    break;
    case"1":
    //Papas Fritas 25
    totalComida +=25*cantPlatillo;
    break;

    default:
        
        break;
        debugger;
    }
  

    //                     Bebidas

    switch(optBebida){
        case"1":
        //Agua Natutal 20
        totalComida +=40*cantBebida;
        break;
        case"1":
        //Soda 30
        totalComida +=30*cantBebida;
        break;
        case"1":
        //Cerveza 45
        totalComida +=45*cantBebida;
        break;
    
        default:
            
            break;
            debugger;
        }
        
        i++
        alert("Usted tiene que pagar $" + totalComida);
}




 