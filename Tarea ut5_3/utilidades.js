/*2. Crea un segundo archivo utilidades.js con una función que reciba 2 parámetros.
El primero es un elemento del DOM, y el segundo es un array de objetos con la misma estructura.
La función creará una tabla html con los datos del array, poniendo los datos de cada objeto en una fila y los valores de cada atributo en una celda,
la tabla se colocará dentro del elemento recibido en el primer parámetro. Exporta la función creada.*/

//La función creada debe funcionar con cualquier elemento del DOM y cualquier array de objetos.

//NOTA: No es necesario que aparezcan las cabeceras de las columnas (pero si aparecen mejor :-).


export default function crearTabla (domElement, objectArray) {
    const tabla = document.createElement("table");
    domElement.append(tabla);

    //CABECERA
    const objeto0 = objectArray[0];
    const rowCabecera = document.createElement("tr");  //Creamos una fila en el DOM
    const keys = Object.keys(objeto0);
    for (let i = 0; i < keys.length; i++) {
        const th = document.createElement("th");
        th.textContent = keys[i];
        rowCabecera.append(th);
    }
    tabla.append(rowCabecera);

    //Rellenamos los datos de la tabla
    for (let i = 0; i < objectArray.length; i++) {
        const objeto = objectArray[i];  //Extraemos los Objetos del objectoArray de 1 en 1
        const row = document.createElement("tr");  //Creamos una fila en el DOM
        
        const valores = Object.values(objeto);  //Almacenamos todos los valores del Objeto en un Array (el método lo hace automaticamente)

        for (let j = 0; j < valores.length; j++) {

            const td = document.createElement('td');  //Creamos un tabledata para almacenar cada dato del Objeto  (desde el array que los almacena)
            const valor = valores[j];  //Extraemos cada valor de 1 en 1
            td.textContent = valor;  //Asignamos el valor al dato de tabla
            row.appendChild(td);  //Introducimos el dato de tabla en la fila creada
        }
        
        tabla.append(row);  //Introducimos la fila con los datos en la tabla
    } 








    //Creamos la cabecera de la tabla
    /*for (let i = 0; i < objectArray.length; i++) {
        const element = array[i];
        
    }
    const th = document.createElement("th")
    const claves = Object.keys(arrayPeliculas[0]);*/

   
}

