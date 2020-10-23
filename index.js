/*This app starts a server and listens on port 3000 for connections. 
  The app responds with “Hello World!” for requests to the root URL
  (/) or route. For every other path, it will respond with a 404
  Not Foundm - fuente: Express
*/
const express = require('express')
const app = express()
const port = 3000

//EXPRESS.JSON, para poder recibir JSON
//EXPRESS.STATIC, para gestionar archivos estáticos (CSS, imágenes..)
//  public es la ruta donde se encuentran los archivos. 
//
//  Ej: app.use(express.static('public'));
//  
//  - Express busca los archivos relativos al directorio estático, 
//      por lo que el nombre del directorio estático no forma parte
//      del URL (Ej: http://localhost:3000/imagenes/gatito.jpg).
//
//  - Para utilizar varios directorios de activos estáticos, invoque 
//    la función de express.static varias veces. Express busca los archivos 
//    en el orden en el que se definen los directorios estáticos con 
//    la función de express.static.
//  
//  - Para crear un prefijo de vía de acceso virtual (donde la vía 
//    de acceso no existe realmente en el sistema de archivos).
//    Ej: app.use('/static', express.static('public')); 
//    
//    Acceso: http://localhost:3000/static/imagenes/gatito.jpg
app.use(express.json());
app.use('/static', express.static('public'));

// GET: Recupera datos que están en el servidor
app.get('/', (req, res) => {
  /* res.send(..) -> envía información como texto/html
        ej: res.send("Se ha ejecutado una petición GET")
     res.json(..) -> envía una información como JSON */

  res.json({mensaje: 'Petición GET recibida'});
})

//POST: Enviar información al servidor, normalmente para que éste
//      realice alguna actualización con dichos datos
app.post('/', (req, res) => {
  const data = req.body;
  console.log("Data ", data);
  res.json({data: data, mensaje: `Petición POST recibida`});
});

//PUT: Envía información para modificar un registro existente
app.put('/user/:id', function (req, res) {
  const id = req.params['id'];
  const data = req.body;
  res.json({data: data, 
    mensaje: `Petición PUT recibida para el id ${id}`});
});

//DELETE: Envia información para eliminar un registro
app.delete('/user/:id', function (req, res) {
  const id = req.params['id'];
  res.json({mensaje: `Petición DELETE recibida para el id ${id}`});
});

// Puerto donde escucha el servidor para atender las peticiones
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})