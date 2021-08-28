require('colors');
const inquirer = require('inquirer')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s) '
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },

        ]
    }
];


const inquirerMenu = async () => {

    console.log("========================".green);
    console.log(" Seleccione una opción".green);
    console.log("========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.yellow} para continuar`
        }
    ];

    await inquirer.prompt(question);

}

const leerInput = async (message) => {
    const question = [{
        type: 'input',
        name: 'patito',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingresa todos los datos';
            }
            return true;
        }
    }
    ]

    const { patito } = await inquirer.prompt(question);
    return patito;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}