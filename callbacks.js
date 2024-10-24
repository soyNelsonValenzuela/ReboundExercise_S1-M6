// Definir dos variables
let variable1 = "Hola,";
let variable2 = "Mundo!";

// Mostrar las variables por consola
console.log(variable1);
console.log(variable2);

// Definir una función que simula una petición a una base de datos con callback
function obtenerDatosDeBaseDeDatos(callback) {
    console.log("Iniciando petición a la base de datos...");
    
    // Simular un retraso de 2 segundos para obtener los datos
    setTimeout(() => {
        let datos = "Datos recibidos de la base de datos";
        callback(datos);
    }, 2000); // Retraso de 2 segundos
}

// Llamada a la función de obtener datos con un callback
obtenerDatosDeBaseDeDatos((respuesta) => {
    console.log(respuesta); // Mostrar la respuesta de la "base de datos"
});

// Otro console.log que se ejecutará de inmediato
console.log("Finalizando script...");


// Para ejecutar en la consola 
// node calbacks.js