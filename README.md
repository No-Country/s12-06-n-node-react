# YumiVerse

Este proyecto corresponde al seleccionado s12-06-n-node-react.

Consiste en una aplicación web que permite la búsqueda de restaurantes y sus menús. Y también dar de alta tu propio restaurante.

## Descripción

El objetivo de este proyecto es desarrollar una plataforma que permita visualizar y gestionar de manera organizada una lista de restaurantes y sus menús principales. Registrarse para guardar la información de favoritos e historial de pedidos. También dar de alta tu propio restaurant, publicar menús y personalizar tu espacio según tu membresía.

## Estructura del proyecto

-   **client/**: Contiene la parte frontend de la aplicación, desarrollada principalmente con React.
-   **server/**: Incluye la lógica del servidor backend construida con Node.js, Express.js y MongoDB, siguiendo arquitectura MVC.

## Instalación

1. Clonar repositorio desde: https://github.com/varayac/s12-06-n-node-react
2. Acceder al repositorio: `cd s12-06-n-node-react`
3. Ingresar a server e instalar dependencias: `cd server && npm install`
4. Ingresar a client e instalar dependencias: `cd client && npm install`

## Uso

1. Ejecutar el servidor: `npm run start` o `npm run dev` o `npm run dev-win`(solo windows) en server/.
2. Ejecutar el cliente: `npm run dev` en client/.
3. Acceder a la API en ThunderClient o Postman: `http://localhost:3001/`.
4. Acceder a la aplicación en tu navegador web: `http://localhost:5173/`.

Nota: Los puertos pueden variar en función a tu archivo de configuración `.env` o los que disponibilice el entornos de ejecución/compilación como Node.js o Vite.

## Tecnologías utilizadas

Front-End:

-   React.js (vite)
-   Tailwind CSS
-   Zustand

Back-End:

-   Node.js (> v18.x.x lts)
-   Express.js
-   Mongoose.js

## Estandarizar código

Con el fin de mantener buenas practicas y un código limpio se ha utilizado el siguiente [estándar (standard)](https://standardjs.com) de JavaScript para facilitar el desarrollo en un escenario colaborativo.

Estos comando se deben ejecutar antes de realizar un push.

-   Ejecutar para visualizar alertas: `npm run lint`
-   Ejecutar para formatear código: `npm run format`

Nota: Este README.md es momentáneo y debe ser actualizado a medida que se avanza con el proyecto.
