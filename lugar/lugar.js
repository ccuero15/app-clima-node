const axios = require('axios')

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-key": "a0fb2ae30dmsh9df3ca1da94a6b5p10f7ccjsnf237a35c8045"
        }
    });

    const resp = await instance.get();



    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${dir}`);
    } else {
        const data = resp.data.Results[0];
        const direccion = data.name
        const lat = data.lat
        const lng = data.lon

        return {
            direccion,
            lat,
            lng
        }

    }


}

module.exports = {
    getLugarLatLng
}