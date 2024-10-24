// array de objetos inicial
let mascotasInicial = [
    {
        nombre: 'Fluffy',
        mascota: true,
        animal: 'gato',
        edadHumana: 7
    },
    {
        nombre: 'Balto',
        mascota: true,
        animal: 'Perro',
        edadHumana: 11
    },
    {
        nombre: 'Mandibulas',
        mascota: false,
        animal: 'Tiburon',
        edadHumana: 50
    }
];

// Crea dos objetos
let mascota1 = {
    nombre: 'Copito',
    mascota: true,
    animal: 'Perro',
    edadHumana: 8
}

let mascota2 = {
    nombre: 'Terry',
    mascota: true,
    animal: 'Perro',
    edadHumana: 10
}

//Mostrar por consola la cantidad inicial
console.log(`1. -Cantidad de objetos inicial:${mascotasInicial.length}`);

//Añadir variables al array inicial
mascotasInicial.push(mascota1, mascota2);

//Mostrar la cantidad final de mascotas 
console.log(`2.- Cantidad de objetos final: ${mascotasInicial.length}`);

//Mostrar por consola el array de mascotas modificado
console.log('3.- -- Array de mascotas modificado  añadiendo las varibles mascota1 y mascota 2 al array inicial--');

console.log(mascotasInicial);
