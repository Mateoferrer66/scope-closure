var firstName; //undefined solo esta definida, no asignada solo definida 

firstName = 'Mateo'; //  asignar variable darle valor
console.log(firstName);


// var y let se puede reasignar 
// const no puede reasignar

//var puede declarar 
// let y const no puede redeclarar

// const no se puede reasignar noi declarar por ser constante siempre tiene que ser unica 

// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
//const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌