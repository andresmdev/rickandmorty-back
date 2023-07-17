const axios = require('axios');

/**
 * 
 * @returns {Promise<Array>}
 */
exports.getAllCharcters = async () => {
  var characters = [];
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character?species=human');
    const data = response.data.results;
  
    for(var d of data) {
      characters.push({
        "id": d.id,
        "name": d.name,
        "status": d.status,
        "gender": d.gender
      })
    }

    return characters;
  }
  catch (error) {
    console.log(error);
  }
}

/**
 * 
 * @param {*} id Character ID
 * @returns 
 */
exports.getCharacterBy = async (id) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?id=${id}`);

  const data = response.data.results;

  var character = {
    "id": data[0].id,
    "name": data[0].name,
    "status": data[0].status,
    "gender": data[0].gender,
    "location": data[0].location.name,
  }

  return character;
}