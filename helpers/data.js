const fs = require('fs')
const direccion = "./database/data.json";

const guardarDB = (data) => {
    fs.writeFileSync(direccion, JSON.stringify(data));
}


const leerData = () => {

    if (!fs.existsSync(direccion)) {
        return null;
    }
    const lectura = JSON.parse(fs.readFileSync(direccion, { encoding: 'utf-8' }));
    
    return lectura;

}


module.exports = {
    guardarDB,
    leerData
}