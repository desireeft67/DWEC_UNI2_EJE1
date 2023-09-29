var nombreApellidos = prompt(("Introduce tu nombre y apellidos"));

console.log("La longitud de la cadena es "+nombreApellidos.length);
console.log("El usuario en minusculas -> "+nombreApellidos.toLowerCase());
console.log("El usuario en mayusculas -> "+nombreApellidos.toUpperCase());
console.log("Nombre y apellidos por separado -> "+nombreApellidos.split(" "));

var nomUsu1 = nombre + apellido1.charAt(0) + apellido2.charAt(0);
console.log("Propuesta de usuario 1 ->"+nomUsu1);

var nomUsu2 = nombre.substring(0, 2) + apellido1.substring(0, 2) + apellido2.substring(0, 2);
console.log("Propuesta de usuario 1 ->"+nomUsu2);