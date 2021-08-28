const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion) {
        this.id = uuidv4();
        this.descripción = descripcion;
    }


}

module.exports= Tarea;