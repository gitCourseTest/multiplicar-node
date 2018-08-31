//Requireds
const fs = require('fs');
const colors = require('colors');

let data = '';

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base}, no es un número válido.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i} `;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(` ${ base } * ${ i } = ${ base * i} \n`.green);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}