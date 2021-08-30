const Tarea = require('./tarea');
require('colors');

class Tareas {

    _listado = {};


    constructor() {
        this._listado = {};
    }

    get getTareas() {

        const listado = [];
        Object.keys(this._listado).forEach(keys => {
            listado.push(this._listado[keys]);
        })
        return listado;
    }

    crearTarea(descripcion = '') {

        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;

    }

    CargarTarea(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }


    listadoCompleto() {
        console.log();
        this.getTareas.forEach((tarea, i) => {
            const idx = `${i}`.blue;
            const { descripcion, completadoEn } = tarea;

            const estado = (completadoEn) ? 'Completado'.yellow : 'Pendiente'.red
            console.log(`${idx}. ${descripcion} - ${estado} `);
        })

    }

    listarTareasCompletadas(Completado = true) {
        console.log();
        let cont = 1;
        this.getTareas.forEach((tarea, i) => {

            const { descripcion, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completado'.yellow : 'Pendiente'.red
            if (Completado) {

                if (completadoEn) {
                    console.log(`${(cont + '.').green} ${descripcion} - ${estado}`);
                    cont += 1;
                }
            } else {

                if (!completadoEn) {
                    console.log(`${(cont + '.').green} ${descripcion} - ${estado}`);
                    cont += 1;
                }
            }

        });

    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []) {

        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.getTareas.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;

            }
        });
    }   


}



module.exports = Tareas;