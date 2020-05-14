const axios = require('axios')

const getClima = async (lat, lng) =>{

  
  try {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=186c292c540d8670cade53204e451888&units=metric`)
    
    return resp.data.main.temp
  } catch (e) {
    return 'error'
  }
}

module.exports = {
    getClima
}