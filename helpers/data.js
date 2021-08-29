const fs = require('fs')

const guardarDB = (data) => {

    const direccion = "./database/data.json";
    fs.writeFileSync(direccion, JSON.stringify(data));

}


module.exports ={
    guardarDB
}