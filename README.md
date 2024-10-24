# Rebound Exercise - Node.js Callback and Object Manipulation

## Descripción

Este proyecto es parte del ejercicio **Rebound** del curso _Introducción a Node y Primer Programa_. El ejercicio tiene como objetivo demostrar el uso de **callbacks** y la manipulación de objetos en Node.js, siguiendo los conceptos estudiados.

El código realiza dos partes principales:
1. Muestra el orden de ejecución de funciones usando **callbacks**.
2. Manipula un array de objetos en formato JSON, agregando nuevos objetos y mostrando la cantidad inicial y final de elementos en el array.

## Requisitos

Para ejecutar este proyecto, es necesario tener instalado **Node.js**. Si no lo tienes instalado, puedes descargarlo desde [Node.js Official Website](https://nodejs.org/).

## Ejecución

1. Clona este repositorio:

    ```bash
    git clone https://github.com/soyNelsonValenzuela/ReboundExercise_S1-M6.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd ReboundExercise_S1-M6
    ```

3. Ejecuta el archivo JavaScript con Node.js:

    ```bash
    node nombre_del_archivo.js
    ```

## Ejercicio 1: Callbacks y Orden de Ejecución

En esta parte del ejercicio:

- Se definen dos variables y se muestran por consola usando `console.log()`.
- Se crea un método simulado que realiza una "petición" a una base de datos, utilizando un callback para procesar la respuesta y mostrarla en consola.
- El objetivo es observar y determinar el orden en que los `console.log()` se ejecutan.

## Ejercicio 2: Manipulación de Objetos con Node

Este ejercicio manipula un array de objetos en formato JSON:

- Se parte de un array de objetos llamado `mascotasJson`.
- Se añaden dos nuevos objetos al array utilizando el método `push()`.
- Se imprime por consola la cantidad inicial y final de objetos en el array, junto con el array modificado.

### Ejemplo de salida esperada:

```
bash
Cantidad de objetos inicial: 3
Cantidad de objetos final: 5
[
  { nombre: 'fluffy', mascota: 'true', animal: 'gato', edadHumana: '7' },
  { nombre: 'Balto', mascota: 'true', animal: 'perro', edadHumana: '11' },
  { nombre: 'Mandibulas', mascota: 'false', animal: 'tiburon', edadHumana: '50' },
  { nombre: 'NuevoObjeto1', mascota: 'true', animal: 'hamster', edadHumana: '1' },
  { nombre: 'NuevoObjeto2', mascota: 'false', animal: 'tortuga', edadHumana: '100' }
]
```

## Autor

Nelson Valenzuela

¡Siéntete libre de clonar el repositorio y probar el código! Asegúrate de que Node.js esté instalado para ejecutar los archivos JavaScript en la consola.
