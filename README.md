# Generador de fuentes de iconos desde SVG
Tarea que genera fuentes tipográficas y el CSS asociado a partir de un directorio con múltiples SVG.

La recomendación de Sara Soueidan es que uses SVG en lugar de las fuentes (https://www.sarasoueidan.com/blog/icon-fonts-to-svg/) && (https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/).
Comparativa de las dos técnicas (https://css-tricks.com/icon-fonts-vs-svg/).

Es la configuración mas básica que he creido necesaria. Para dotar de mas opciones consultar la documentación de las librerías utilizadas.

https://www.npmjs.com/package/gulp-iconfont
https://github.com/backflip/gulp-iconfont-css

## Requisitos
Tener NodeJS y NPM instalados y Gulp de manera global.

## Instalación
Clonar repositorio.
Instalar las dependencias
```bash
$ npm install
```
o
```bash
$ yarn
```

## Ejecutar

Para ejecutar la tarea puedes usar cualquiera de los comando siguientes

```bash
$ npm start
```
o
```bash
$ yarn start
```
o
```bash
$ gulp
```

## Configuración

En el archivo `./config.js` están definidas las opciones de configuración.

Clave | Descripción | Valor por defecto
--- | --- | ---
**src**  | Directorio donde se encuentran los SVG  | `./src/svg`
**dest** | Directorio donde se generara las fuente resultantes |`./build/fonts`
**fontName** | Nombre de la fuente |    `nextfont`
**cssTemplate** | Plantilla para generar el CSS | `./src/css/_icons.scss`
**cssDest** | Ruta de destino del archivo CSS a partir de la ruta de destino (dest: ruta de las fuente resultantes), se puede seleccionar otra extensión para el archivo resultante | `./styles/_icons.scss`
**cssFontPath** | Ruta del directorio de las fuentes a incluir en el CSS | `./fonts/`
**fontFormats** | Formatos de fuentes a generar | `["ttf", "eot", "woff"]`


# Implementación

Incluir el CSS en el HTML y añadir una etiqueta con las clases de cada icono generado.

```HTML
<link href="./styles/icons.css" rel="stylesheet" type="text/css">
<span class="icon-alert"></span>
```
