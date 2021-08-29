require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerData } = require('./helpers/data')

const main = async () => {


    const tareas = new Tareas();
    console.log(leerData());

    await pausa();
    let opcion = '';


    do {
        opcion = await inquirerMenu();
        switch (opcion) {
            case '1':
                const entrada = await leerInput('Ingresa la descripción de la tarea: ');
                tareas.crearTarea(entrada);
                console.log(entrada);
                break;
            case '2':
                console.log(tareas.getTareas);
                break;

        }

        guardarDB(tareas.getTareas);

        await pausa();

    } while (opcion !== '0');


}

main();