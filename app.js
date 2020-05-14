const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

/* lugar.getLugarLatLng(argv.direccion).then( res =>{
    console.log(res)
}).catch(err=>{
    console.log('error',err)
}) */


/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log) */
//argv.direccion

const getInfo = async (direccion) => {
    
    
    try {
        const infoLugar = await lugar.getLugarLatLng(direccion);
        const infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng)
        return `el clima de ${infoLugar.direccion} es de ${infoClima}`;
        
    } catch (e) {
        
        console.log(`no existe el lugar ${direccion}`)
    }

}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
