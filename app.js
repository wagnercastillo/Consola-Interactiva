require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerData } = require('./helpers/data')

const main = async () => {

    const tareas = new Tareas();
    tareas.CargarTarea(leerData());
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
                console.log(tareas.listadoCompleto());
                break;
            case '3':
                console.log(tareas.listarTareasCompletadas());
                break;
            case '4':
                console.log(tareas.listarTareasCompletadas(false));
                break;

        }

        guardarDB(tareas.getTareas);
        await pausa();

    } while (opcion !== '0');

}

main();