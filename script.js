// Desafio Opcional 

let capitalCo = prompt("¿Cual es la capital de Colombia?").toLowerCase()

let esBog = (capitalCo == "bogota")
let esMed = (capitalCo == "medellin")
let esCal = (capitalCo == "cali")
let esBar = (capitalCo == "barranquilla")

if(esBog){
    console.log("¡Muy bien! La capital de Colombia es Bogota")
}else if (esMed){
    console.log("Nop, Medellin es la capital de Antioquia")
}else if (esCal){
    console.log("Nop, Cali es la capital del Valle del Cauca") 
}else if (esBar){
    console.log("Nop, Barranquilla es la capital del Atlantico")
}else {
    console.log ("Nop, sigue intentando")
}
