//Permite leer parametros de consola. En cmd ejecutar: node app listar --base 2 --limite 15
/* const argv = require('yargs')
    .command('listar', 'Imprimer en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'Crea un arcchivo con las tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; */
const colors = require('colors');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


console.log(argv);
console.log(argv.base);
console.log(argv.limite);
let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: `, colors.green(archivo));
        }).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log("Comando no reconocido...");
}


/* let argv2 = process.argv; */

/* console.log(argv2); */
/* let base = 'abc';*/
/* console.log(process.argv); */

/* crearArchivo(argv.base, argv.limite).then(archivo => {
    console.log(`Archivo creado ${archivo}`);
}).catch(err => {
    console.log(err);
}); */