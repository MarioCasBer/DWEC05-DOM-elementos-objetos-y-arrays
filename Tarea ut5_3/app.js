//3. En app.js importa la función creada en el apartado anterior.
//Crea un array de objetos con los datos que quiereas y realiza la llamada a la función, pasando como primer parámetro document.body y como segundo el array creado.

//Array de prueba peliculas y año de estreno
const arrayPeliculas = [
    {nombre:"Avatar", year:2009},
    {nombre:"Inception", year:2010},
    {nombre:"The Matrix", year:1999},
    {nombre:"Star Wars", year:1977},
    {nombre:"Jurassic Park", year:1993},
    {nombre:"Predator", year:1987},
    {nombre:"Terminator 2", year:1991},
    {nombre:"Alien", year:1979}
  ];

//Habiendo recibido el array anterior, y document.body como elemento del DOM, la función generará una tabla en el body del documento.
import crearTabla from "./utilidades.js";
window.onload = crearTabla(document.body,arrayPeliculas);