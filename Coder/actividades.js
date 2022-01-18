//Actividad 1

let nombre = "Homero";
let apellido = "Simpson";
let edad = 39;
console.log(nombre + " "+ apellido + " " + "su edad es "+edad)

//Actividad 2
const ciudad1= "Paris";
const ciudad2= "Roma";
const ciudad3= "Amsterdam";
const ciudad4= "Estocolmo";
const ciudad5= "La Habana";

//Actividad 3
let persona = "Bart Simpson";
let domicilio = "742 Evergreen";
let fechaNac= "12-11-70" ;
let pais= "USA";
const codigo= "B4RET456FSDW"
let carnet= "CODIGO: " + codigo + " "+
            "Nombre: " +persona + " "+
            "Pais: " + pais +" "+
            "Nacimiento: "+ fechaNac + " "+
            "Domicilio: "+domicilio;
console.log(carnet);

//Actividad 4
let nombre1= prompt("Ingresa el primer nombre");
let nombre2= prompt("Ingresa el segundo nombre");
let nombre3= prompt("Ingresa el tercer nombre");
let nombre4= prompt("Ingresa el cuarto nombre");
let nombre5= prompt("Ingresa el quinto nombre");
let miembrosFamilia= "La familia esta compuesta por "+ nombre1+ ", "+nombre2+", "+nombre3+", "+nombre4+" y "+nombre5;
alert( miembrosFamilia);

//Actividad 5
let precio= parseFloat(prompt("ingresar precio: "));
let descuento20= precio -(precio* 0.20);
let descuento30= precio -(precio* 0.30) ;
console.log(descuento20);
console.log(descuento30);