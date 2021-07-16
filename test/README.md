# API GitHub

Obtener los datos de un usuario introducido por parametro de la API de GitHub

## Instrucciones de uso
Seguir las siguientes instrucciones

### Instalación

```
npm install api-github-library
```

### Uso

```
const api = require('api-github-library');
api.obtenerDatosDeUsuario('melvin-zaldana').then(
    respuesta => console.log (respuesta)
).catch(error => console.log(error));
```