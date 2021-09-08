let data = prompt('Ingrese edad de usuario:')
let edad_usuario = parseInt(data)

console.log(typeof(data), typeof(edad_usuario))

if (edad_usuario < 18) {
    console.log("El usuario es menor de edad, su edad es:",edad_usuario)
} else if(edad_usuario >= 18) {
    console.log("El usuario es mayor de edad, su edad es:", edad_usuario)
}
