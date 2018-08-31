let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//Permite leer parametros de consola. En cmd ejecutar: node app listar --base 2 --limite 15
const argv = require('yargs')
    .command('listar', 'Imprimer en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un arcchivo con las tablas de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}