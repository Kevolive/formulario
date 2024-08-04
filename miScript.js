//Stefany Aguilar
/*
// paso por valor

let x = 12
let y = "Kevin"
let z = null

let a = x
let b = y
let c = z
console.log(x, y, z, a, b, c)

//paso por referencia

let frutas = ["manzana"]
frutas.push("Chirimoya")
console.log(frutas)
frutas.push("Aguacate")
console.log(frutas)

let panes = ["🥐"]
let copiaDePanes = panes
console.log(copiaDePanes)
panes.push("🍞")
console.log(copiaDePanes)
panes.push("🥖")
console.log(copiaDePanes, panes)

let frutica = {
    naranja: "🍊"
}
let vegetales = frutica
vegetales.naranja = "🥪"
console.log(frutica)


let ropa = {
    sueter: "👕"
}
ropa.pantalon=("👖")
console.log(ropa)

let viaje = {
    avion:"✈️"
}
viaje.carro =("🚗")
console.log(viaje)

// clases de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion= "Comillas dobles"
const terceraOpcion=`hola`

// 1. Concatenación con +
const direccion = "Calle falsa 123"
const ciudad = "Bello"
const direccionCompleta= "Hola, mi dirección es " + direccion + " " + ciudad
console.log(direccionCompleta)

//2. Concatenación con template literals

const nombre = "Kevin"
const pais = "Colombia"
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3. Concatenación con join()
const primeraParte= "Me gusta"
const segundaParte= "mi esposa"
const terceraParte="Débora"
const pensamiento= [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(" "))

//4. Concatenación: concat
const deporte1= "Fútbol"
const deporte2="Voley"
const deporte3= "Dofus"
const hobbies = "Mis hobbies son: ".concat(deporte1, ", ", deporte2, ", ", deporte3, " .")
console.log(hobbies)

// Caracteres de escaspe
// 1. Escape alternativo
const escapeAlternativo= "I'm un papu"

// 2. Escape barra invertida
const escapebarraInvertida= 'I\'m el papu'

// 3. Escape con template literals
const escapeComillaInvertida = `I'm el papu`


// Escritura de strings largos

const poema= "Callate perro pipón \n" +
             "llenito de garrapata\n" +
             "tú fuiste el que te comiste\n" +
             "el arróz de leche dañao"

console.log(poema)

const poema2= "Callate perro pipón \n\
             llenito de garrapata\n\
             tú fuiste el que te comiste\n\
             el arróz de leche dañao"

console.log(poema2)

const poema3= `Callate perro pipón 
             llenito de garrapata
             tú fuiste el que te comiste
             el arróz de leche dañao`

console.log(poema3)

// Manipulación de strings

// String primitivo

const stringPrimitivo= "Soy un string"
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien= String ('Soy un string también')
console.log(typeof stringPrimitivoTambien)

// String objeto
const stringObjeto= new String("Soy un objeto")
console.log(typeof stringObjeto)

// Acceder a caracteres

const saludo='Hola. ¿Cómo estás?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('x'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleUpperCase())

const saludoDividido =saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludosConEspacio= ' Hola  Débora '
const saludosSinEspacio= saludosConEspacio.trim()
console.log(saludosConEspacio)

const saludoOriginal= "Hola Kevin"
const nuevoSaludo=saludoOriginal.replace('Kevin', 'Débora')
console.log(nuevoSaludo)


// Clase número
// Tipo entero y decimal

const entero= 31
const decimal= 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica
const cinetifico= 5e5
console.log(cinetifico)


// 3. Infinito y NaN

const infinito= Infinity
const noEsUnNumero= NaN
console.log(infinito)
console.log(noEsUnNumero)

// Operaciones aritméticas
//1. Suma, resta, Multiplicación y división
const suma= 5+4
const resta= 3-4
const Multiplicación= 4*4
const división= 70/7


//2.Módulo y exponenciación
const modulo= 15 % 5
const exponenciacion= 2 **5


// Precisión
const resultado = 0.4 + 0.1
console.log(resultado)
console.log(resultado.toFixed(4))
console.log(resultado === 0.50000)

// Operaciones Avazadas
// Con Math
const raizCuadrada= Math.sqrt(25)
const absoluto= Math.abs(-23)
const aleatorio= Math.random()
console.log(raizCuadrada)
console.log(absoluto)
console.log(aleatorio)

// CLase boolean

const isActive= true
const hasPermission= false

// Conversión implícita

const result = 5<10
console.log(result)

const name= 'Kevin'
console.log(!!name)


// Conversión Explícita
const value= 0  // Js toma como falso siempre el número 0, y todos los demás números verdaderos
const otherValue= 12
const explicitBoolean= Boolean(value)
console.log(explicitBoolean)


// Clases null, undefined, bigint y simbol

// null
const Skiper = null
console.log(Skiper)
console.log(typeof Skiper)

// Undefined
let names
console.log(names)

// Symbol
const unique = Symbol('kev')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user ={}
user[ID]= '1234'
console.log(user)

// BigInt. se le agrega una "n" al final del número grande para que salga completro en la terminal
 const numberGrande = 1387374272037027502n
 console.log(numberGrande)

 const particulasDelUniverso= 100000000000000000000000n
 console.log(particulasDelUniverso)

 // Type castinf y coercion. Conversión de tipos
 // Explicit

 const string = '31'
 const integer = parseInt(string)
 console.log(integer)
 console.log(typeof integer)

 const stringDecimal = '3.14'
 const float = parseFloat(stringDecimal)
 console.log(float)
 console.log(typeof float)

 const binary = '10'
 const decimalNuevo = parseInt(binary, 2)
 console.log(decimalNuevo)
 console.log(typeof decimalNuevo)

 // type implicit
 const sum = '5' + 4
 console.log(sum)

 const sumWithBoolean = '5' + true
 console.log(sumWithBoolean)

 const sumWithNumber = 4 + true
console.log(sumWithNumber)


const stringValue= '10'
const numberValule= 5
const booleanValue= true

console.log('--------------')
console.log(stringValue + stringValue ) // CONCATENA
console.log(stringValue + numberValule)// CONCATENA
console.log(stringValue + booleanValue)// CONCATENA
console.log('------------')
console.log(numberValule + stringValue )// CONCATENA
console.log(numberValule + numberValule) // SUMA
console.log(numberValule + booleanValue)// SUMA
console.log('------------')
console.log(booleanValue + stringValue) // CONCATENA
console.log(booleanValue + numberValule) // SUMA
console.log(booleanValue + booleanValue) // SUMA

// Ejercicio práctico de una red social

//1. user information
const userName= 'Jahlovehot'
const fullName= 'Kevin Keegan'
const age=31
const isStudent= true

// 2. Address
const address= {
    street: 'Calle falsa street',
    City:'Astrub',
    State: 'Amakana',
    zipCode: 54321

}

// 3. Hobbies
const hobbiesKevin=['Programacion', 'Gaming', 'Reading']

// 4. Generation personalized bio

const personalizedBio= `Hi. My name is ${fullName}.
I´m ${age} years old. 
I live in ${address.City}.
I love ${hobbiesKevin.join(', ')}
Follow me for more adb¿ventures!
`

// 5. Print my profile and bio
console.log(personalizedBio)

// Funciones

// A continuación vamos a calcular el precio de un artículo con descuento.
function calculateDiscountedPrice (price, discountPercentage) {

    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    
    return priceWithDiscount
}

const priceOriginal =250000
const discountPercentage = 15
const finalPrice = calculateDiscountedPrice (priceOriginal, discountPercentage)

console.log('El precio original es $' + priceOriginal)
console.log('El descuento es del ' + discountPercentage + ' %')
console.log('El precio final es de ' + finalPrice)


// Funciones Vs Métodos

// Capacidades que tienen las funciones al igual que otros objetos
// Pasar funciones como argumentos --> Callback

function a () {}
function b (a) {}
b(a)

// Retornar funciones

function a (){
    function b() {}
    return b
}

// Asignar funciones a variables --> Expresión de función

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj= {}
a.call(obj)

// Anidar funciones --> Nested functions
function a (){
    function b() {
        function c (){

        }
        c()
    }
    b()
    
}
a()

// ¿Es posible almacenar una función en un objeto?

const cohete = {
    name: 'El papi',
    launchMessage: function launchMessage(){
        console.log('Fuego')
    }
}
cohete.launchMessage()*/

// Funciones puras e impuras

// Funciones puras

//Producen side effects (Efectos secundarios)

// 1. Modificación de variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Modificacipon del DOM
// 5. Impresiones en consola y pantalla
// 6. Obtener la hora actual

// function suma (a, b) {
//     return a + b
// }
// //Funciones impuras
// function suma (a, b) {
//     console.log('A: ', a)
//     return a + b
// }

// let total = 0
// function sumaWithSideEffects (a) {
//     total += a
//     return total
// }
// // Función pura
//     function square(x){
// return x*x
//     }

//     function addTen(y){
//         return y + 10
//     }
    
//     const number = 5
//     const finalResult = addTen(square(number))
//     console.log(finalResult)


// Identificador This

// Para acceder a las propiedades del objeto

// Enlace implícito - Implicit binding

// const house = {
//     dogName: 'Skiper',
//     dogGreeting: function (){
//         console.log(`Hi. I'm ${this.dogName}`)
//     }
// }
// house.dogGreeting()


// // Enlace explícito - Explicit binding
// const carro = {
//     ownerName: 'Kevin',
//     ownerCar : function () {
//         console.log(`Hola. Mi nombre es ${this.ownerName}, y este es mi carro`)
//     }
// }
// carro.ownerCar()

// function ownerCar () {
//     console.log(`Hola. Mi nombre es ${this.ownerName}, y este es mi carro`)
// }

// const newCar = {
//     ownerName: 'Débora'
// }
// ownerCar.call(newCar)

// function newOwnerDog (owner, address) {
//     console.log(`Hola. Mi nombre es ${this.ownerName}, y vivo con mi esposo ${owner} en la ${address}`)
// }
// const owner = 'Kevin'
// const address = 'Calle siempre viva'

// newOwnerDog.call(newCar, owner, address)

// Clase call, bind y apply
// const owner = 'Kevin'
// const address = 'Calle falsa 123'

// function dogGreeting (owner, address) {
//     console.log(`Hi, my name is ${this.dogName} y vivo con mi dueño ${owner} en la ${address}`)

// }
// const newHouse = {
//     dogName: 'Skiper'
// }
// dogGreeting.call(newHouse, owner, address)

// const valoresNecesarios = [ owner, address]
// dogGreeting.apply(newHouse, valoresNecesarios)

// const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
// bindingWithBind()


// const caricatura = {
//     nombre: 'Vaca y Pollito'

// }
// function recuerdo(personaje) {
// console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}` )
// }
// recuerdo.call(caricatura, 'Vaca')
// recuerdo.bind(caricatura, 'Pollito')


//Arrow function y enlace léxico

// función normal
// const saludo = function (name) {
//     return `Hi, ${name}`
// }

// //Arrow function explicit
//  const Greeting = (name) => {
//     return `Hi, ${name}`
//  }
// //Arrow function implicit - implicit return

// const NewGreeting = name => `Hi, I'm ${name}`
// const NewGreetingWithApellio = (name, lastname) => `Hi, I'm ${name} ${lastname}`

// //Lexical binding

// const personajeDeFiccion = {
//     name: 'Tío Rafa',
//     mensageDelTio: function (mensaje) {
//         console.log(`${this.name} dice: ${mensaje}` )
//     },
//     mensageDelTioArrowFunction: (mensaje) => {
//         console.log(`${this.name} dice ${mensaje}`)
//     }
// }
// personajeDeFiccion.mensageDelTio('no sea ripio')
// personajeDeFiccion.mensageDelTioArrowFunction('salude a la familia, no sea ripio')

//Funciones constructoras

// const personalizedMessage = () => 'Nos fuimos, como los corraleros de Majagual'
// class Rocket {
//     constructor(name, ownMessage) {
//         this.name = name,
//             this.mensajeDeLanzamiento = ownMessage
//     }
// }


// const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
// const falconHeavy = new Rocket('Falcon Heavy', personalizedMessage)

// console.log(falcon9Rocket.name)
// console.log(falconHeavy.mensajeDeLanzamiento ())

// const RocketWithArrowFunction =(name, ownMessage) =>({
//     name:name,
//     mensajeDeLanzamiento:ownMessage
// })
// const personalizaedMessageForArrowFunction = () => 'Successful launch!'
// const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizaedMessageForArrowFunction)
// console.group(falcon9Rocket1.name)
// console.group(falcon9Rocket1.mensajeDeLanzamiento())

// Ejemplo de platzi
// const personalizedMessage=()=>'Goodbye everybody !'
// function Rocket(name,ownMessage){this.name=name
// this.launchMessage=ownMessage}
// const falcon9Rocket=new Rocket('Falcon 9',personalizedMessage)
// const falconHeavyRocket=new Rocket('Falcon Heavy',personalizedMessage)
// console.log(falcon9Rocket.name)
// console.log(falcon9Rocket.launchMessage())
// const RocketWithArrowFunction=(name,ownMessage)=>({name:name,launchMessage:ownMessage})
// const personalizedMessageForArrowFunction=()=>'Successful launch !'
// const falcon9Rocket1=RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)
// console.group(falcon9Rocket1.name)
// console.group(falcon9Rocket1.launchMessage())

// const objeto = { metodo: function() {
//      console.log('Hola desde el método'); } 
//     };
//       objeto.metodo(); 

// function suma (a,b) {
//     return (a+b)
// } 
// console.log(suma(5,10))

// // Clase 28: Objeto windows y modo estricto

// // Mostrar un mensaje de alerta
// window.alert("¡Débora te amoooooooooooo!!");

// // Obtener el ancho de la ventana del navegador
// var anchoVentana = window.innerWidth;

// // Redirigir a otra URL
// window.location.href = "https://www.example.com";


// Crear biografías con js de personajes

// Crear team de dofus

// function teamDofus (name, power, color) {
// this.name= name
// this.power= power
// this.color= color 
// this.leader= false
// this.displayInfo= function() {
//     console.log(`Team Dofus information:
//         Name: ${this.name}
//         power: ${this.power}
//         color:${this.color}
//         ${this.leader ? 'Líder: sí' : 'Líder: no'} 
//         `)
// }
// this.becomeLeader= function () {
//     this.leader = true
//     console.log(`${this.name} has the leader of the team Dofus`)
// }
// }

// const sram = new teamDofus('Sram', 'fuerza', 'amarillo clarito')
// const sacro = new teamDofus('Sacro', 'agi', 'amarillo con negro')
// const ocra = new teamDofus('Ocra', 'inte', 'Blanco con negro')
// const panda = new teamDofus('Panda', 'suerte', 'Blanco con rojo')


// sram.displayInfo()
// sacro.displayInfo()
// ocra.displayInfo()
// panda.displayInfo()

// sram.becomeLeader()

// sram.displayInfo()
// sacro.displayInfo()
// ocra.displayInfo()
// panda.displayInfo()


// Clases en js, con Kiko Palomares

// class User {
//     constructor(name){
//         this.name = name}

// sayHello(){
//     alert("Hola " + this.name);
//     console.log("Hola " + this.name);
// }   
//  }


// const user = new User("Kevin")
// user.sayHello()

// alert(typeof User);


//El profesor inválido

// Lógica y ciclos

// Operadores de comparación
// a=10;
// b=20;
// c="10";

// == Igualar
// === IGuala, pero tiene en cuenta dos condiciones
// != diferente
// !== diferente, pero tiene en cuenta dos condiciones
// < menor que 
// > mayor que
// >= Mayor Igualar
// <= Menor que


// Operadores lógicos
// a=10;
// b=20;
//  c="10";

// && para mos trar dos opciones
// || para ver si una de las dos se cumple
// ! siginifica Node, una negación

// Condicionales if, else if, else

// let nombre = "Nivek"
// if (nombre === "Kevin") {
//     console.log("Hola Kevin")
// } else if (nombre ==="Debora"){
//     console.log("Hola Debora, negra hermosa")
// } else {
//     console.log("Primo, no lo conózco")
// }

// Adivina el número

// const numeroSecreto = Math.floor(Math.random() * 10 + 1)

// const numeroJugador= parseInt(prompt("Adivina el número secreto compae: "))
// console.log(`Este es el número con el que juegas ${numeroJugador}`)

// if (numeroJugador === numeroSecreto){
//     console.log("Que bien. Adivinaste el número")
// } else if (numeroJugador < numeroSecreto) {
//     console.log("El número es bajo. Dale de nuevo")
// } else {
// console.log("El número es mayor. Intenta de nuevo")
// }

// function compararNumero (numeroJugador, numeroSecreto) {
//     console.log("Vamos a ver los resultados")
// }
// compararNumero(numeroJugador, numeroSecreto)

// function generarNumeroSecreto() {
//     return Math.floor(Math.random() * 10 + 1);
// }

// // Solicita al jugador que ingrese un número y maneja posibles errores de entrada.
// function obtenerNumeroJugador() {
//     const input = prompt("Adivina el número secreto entre 1 y 10");
//     const numero = parseInt(input);
    
//     if (isNaN(numero) || numero < 1 || numero > 10) {
//         // Si la entrada no es un número válido, vuelve a llamar a la función.
//         console.log("Por favor, ingresa un número válido entre 1 y 10.");
//         return obtenerNumeroJugador();
//     }
    
//     return numero;
// }

// // Compara el número ingresado por el jugador con el número secreto generado.
// function compararNumeros(numeroJugador, numeroSecreto) {
//     if (numeroJugador === numeroSecreto) {
//         console.log("¡Adivinaste el número secreto!");
//     } else if (numeroJugador > numeroSecreto) {
//         console.log("El número secreto es menor.");
//     } else {
//         console.log("El número secreto es mayor.");
//     }
// }

// // Juego principal
// const numeroSecreto = generarNumeroSecreto();
// const numeroJugador = obtenerNumeroJugador();

// // Imprime en la consola el número con el que jugó el usuario.
// console.log(`Este es el número con el que jugaste: ${numeroJugador}`);

// // Compara los números y muestra el resultado.
// compararNumeros(numeroJugador, numeroSecreto);

// function generarNumero(){
// return (Math.floor(Math.random()* 10 + 1))
// }
// function obtnerNumero (){
//         const numeroJugador = parseInt(prompt("Adivina el número secreto"))

//         if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador >10) {
//             alert("El número no es válido. Inténtalo de nuevo")
//         } return numeroJugador
// } 
// function compararNumero(numeroEscogido, numeroSecreto) {
//     if (numeroEscogido === numeroSecreto) {
//         alert("¡Felicidades. Acertaste en el número")
//     } else if (numeroEscogido<numeroSecreto){
//         console.log("El número es menor")
//         alert("Ojo. El número es menor al secreto. Dale de nuevo")
//                 const nuevoNumero=obtnerNumero()
//         compararNumero(nuevoNumero, numeroSecreto)
//     } else {
//         console.log("El número es mayor")
//         alert("Ojo, el número es mayor al secreto. Dale de nuevo ")
//         const nuevoNumero=obtnerNumero()
//         compararNumero(nuevoNumero, numeroSecreto)
//     }
// }

// const numeroEscogido=obtnerNumero()
// const numeroSecreto=generarNumero()


// alert(`Este fue el número que jugaste ${numeroEscogido}`)

// compararNumero(numeroEscogido, numeroSecreto)
// Ejercicio de prueba

// const numeroSecreto = Math.floor(Math.random() *10 +1)
// const numeroJugador=parseInt(prompt("Adivina el número"))
// alert(`Este es el número del jugador ${numeroJugador}`)

// if (numeroJugador===numeroSecreto){
//     alert("¡Felicidades, ganaste!")
// }else if (numeroJugador>numeroSecreto) {
//     alert("El número es mayor")
// } else {
// alert("El número es menor")
// 

// Operador ternario

// const edad= parseInt(prompt("Ingresa el número"))
// alert(`Esta es la edad de la persosna: ${edad}`)
// const mensaje = edad >=18 ? "Es mayor de edad, sí entra" : "Es menor de edad, no entra"

// alert(mensaje)

let frutas= "Mango"
switch(frutas){
    case "Naranja":
        console.log("Las naranjas son a $4.000 el kg")
        break;
        case "Pera":
            console.log("Las peras son a $3.000 cada una")
            break;
            case "Tamarindo":
                console.log("La bolsita cuesta $5.000")
                break;
                case"Mango":
                console.log("El mango cuesta 1.000 barras cada uno")
                break;
                default:
                    console.log("Primo, acá no vendemos esa vaina")
                
}










