nombre = "mateo"
console.log(nombre) // "Mateo"

"use strict";

nombre = "mateo"
console.log(nombre) // ReferenceError: nombre is not defined

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // 3.14


"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined