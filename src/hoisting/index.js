console.log(nombre) // undefined
var nombre = "mateo" 


// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"


//en bloque cuando el log esta afuera 

if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
  console.log(saludo)
  console.log(despedida)


  var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined


// hoisting en funcion 


console.log( saludar() )

function saludar() {
  return "Hola"
}

// Hoisting
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"


  //Hoisting ocn let y const 

  console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"




//Debbugger


var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello()