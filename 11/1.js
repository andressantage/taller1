/*1. a. Declarar variables llamadas 'continente', 'país',
'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
valores de cantidad de habitantes, de acuerdo con su contexto
real en su propio país. */

var continente = 1004000000;
var pais = 52000000;
var departamento = 2185000;
var ciudad = 581130;
var barrio = 10811;

/* b. Registre sus valores en la consola. */

console.log("Cantidad de habitantes de Ámerica: "+ continente.toLocaleString())
console.log("Cantidad de habitantes de Colombia: " + pais.toLocaleString())
console.log("Cantidad de habitantes de Santander: "+ departamento.toLocaleString())
console.log("Cantidad de habitantes de Bucaramanga:"+ ciudad.toLocaleString())
console.log("Cantidad de habitantes de Cañaveral: "+ barrio.toLocaleString())

/*2. a. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía. */

var esTercerMundista=true
var idioma

/* b. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma' */

esTercerMundista=true
continente=1004000000 //"Ámerica"
pais=52000000 //"Colombia"
idioma="español"

/*3. a. Establezca el valor de 'idioma' en el idioma que se
habla donde vive. */

idioma="español"

/* b. Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const. */

//Ya lo hice

/* c. observe lo que sucede.  */

//Me aparece el siguiente error:
//uncaught SyntaxError: Missing initializer in const declaration


/*4. a. Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad? */

//Es una pregunta algo ambigua, pero de todas maneras la respondere:
var x=pais/2
console.log("La cantidad de personas que vivirian en la otra mitad es: ",x.toLocaleString())

/* b. Aumente la población de su país en 1M y registre el resultado
en la consola */

var y=1000000
var pais=pais+y
console.log("El valor de la poblacion de mi pais aumentado 1M es: ", pais)

/* c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia? */

const finlandia=6000000
if(pais>finlandia){
    console.log("Mi pais tiene mayor gente que Finlandia");
}else if(pais===finlandia){
    console.log("Mi pais tiene igual gente que Finlandia");
}else{
    console.log("Mi pais tiene menor gente que Finlandia");
}

/* d. La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio? */

const algunPais=33000000
if(pais>algunPais){
    console.log("Mi pais tiene mayor gente que el pais mencionado");
}else if(pais===algunPais){
    console.log("Mi pais tiene igual gente que el pais mencionado");
}else{
    console.log("Mi pais tiene menor gente que el pais mencionado");
}

/* e. Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés. */

pais="Colombia"
continente="América"
departamento="Santander"
ciudad="Bucaramanga"
barrio="el prado"
pob=3000
var descripcion=pais+" esta en "+continente+", y "+ciudad+" que está en el departamento de "+departamento+" tiene un barrio llamado "+barrio+" y sus "+pob+" personas hablan "+idioma+"."
console.log("El valor de descripcion es: ",descripcion)

/* 5. Repita el ejercicio usando Template strings (Template strings: son una característica 
de JavaScript que te permite incrustar expresiones dentro de cadenas de texto 
utilizando una sintaxis más legible y flexible.) */

var descripcion=`${pais} esta en ${continente}, y ${ciudad} que está en el departamento de ${departamento} tiene un barrio llamado ${barrio} y sus ${pob} personas hablan ${idioma}.`
console.log("El valor de descripcion usando Template strings es: ",descripcion)

/* Métodos en cadenas
Cree 10 variables de tipo cadena donde almacene valores string en
Ingles y aplique cada una de los siguientes métodos de cadena
1. length
2. includes()
3. back ticks o templatre strings
4. trimStart()
5. trimEnd()
6. replace
7. slice
8. split
9. ToUpperCase
10. ToLowerCase */

let string1 = "Hello World!";
let string2 = "I love JavaScript";
let string3 = "Coding is fun";
let string4 = "Web Development";
let string5 = "Learning new things";
let string6 = "Technology is amazing";
let string7 = "Programming is challenging";
let string8 = "Code your dreams";
let string9 = "Stay curious";
let string10 = "Never stop learning";

console.log(string1.length); // 12
console.log(string2.includes("JavaScript")); // true
console.log(`My favorite string is "${string3}"`); // back ticks
console.log(string4.trimStart()); // "Web Development"
console.log(string5.trimEnd()); // "Learning new things"
console.log(string6.replace("amazing", "exciting")); // "Technology is exciting"
console.log(string7.slice(0, 11)); // "Programming"
console.log(string8.split(" ")); // ["Code", "your", "dreams"]
console.log(string9.toUpperCase()); // "STAY CURIOUS"
console.log(string10.toLowerCase()); // "never stop learning"