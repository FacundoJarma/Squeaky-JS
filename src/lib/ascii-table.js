import { createRequire } from "module";
import { join } from "path";
const require = createRequire(import.meta.url);

global.require = require;

const fs = require('fs');

const carpeta = './';
var archivos = [];
fs.readdirSync(carpeta).forEach(archivo => {
    let datos = JSON.parse(fs.readdirSync(carpeta+'/'+archivo));
    archivos.push(datos);
})

console.log(datos)

const AsciiTable = require('ascii-table')

var tabla = new AsciiTable('SqueakyJS - Back');

tabla
    .setHeading('Nombre del archivo', 'Funcionando?')
    .addRow('loginSoquetic.js', true)

console.log(tabla.toString());