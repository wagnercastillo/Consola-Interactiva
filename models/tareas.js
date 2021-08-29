const Tarea = require('./tarea');


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
}



module.exports = Tareas;