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
continente="Ámerica"
pais="Colombia"
idioma="español"

/*3. a. Establezca el valor de 'idioma' en el idioma que se
habla donde vive. */

idioma="español"

/* b. Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const. */



/* c. observe lo que sucede.  */



/* Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad?
b. Aumente la población de su país en 1M y registre el resultado
en la consola
c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia?
d. La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio?
e. Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés */


/* PUNTO 2.
a. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía.
b. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma' /

const esTercerMundista = true;
//const idioma;

console.log(esTercerMundista , continente.toLocaleString(), pais.toLocaleString(), idioma)

/ PUNTO 3.
a.Establezca el valor de 'idioma' en el idioma que se
habla donde vive.
b.Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const.
c.observe lo que sucede. "Se observa que las declaraciones "const" deben inicializarse*/ 

const idioma = "Español";
console.log(idioma)