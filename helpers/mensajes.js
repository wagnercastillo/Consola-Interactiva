require('colors');


const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log(`${'1'.blue}. Crear tarea`);
        console.log(`${'2'.blue}. Listar tareas`);
        console.log(`${'3'.blue}. Listar tareas completadas`);
        console.log(`${'4'.blue}. Listar tareas pendientes`);
        console.log(`${'5'.blue}. Completar tareas`);
        console.log(`${'6'.blue}. Borra tareas`);
        console.log(`${'0'.blue}. Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        })

        readline.question('Escoja la opcion corresta ', (opt) => {
            resolve(opt);
            readline.close();
        })
    })
}

const pausa =()=>{

    return new Promise((resolve) =>{

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
            
        })
        
        readline.question(`Presione ${'ENTER'.yellow} para continuar`, () => {
            readline.close();
            resolve();
        })
        
    })
}

module.exports = {
    mostrarMenu,
    pausa
};