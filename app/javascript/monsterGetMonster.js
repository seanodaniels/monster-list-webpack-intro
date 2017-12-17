let monsterDisplay = require('./monsterDisplay.js');

// import monsterDisplay from './monsterDisplay.js';


let monsterGetMonster = {

  getByURL: function(url) {

      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        monsterDisplay.printEntry(data);
      }).catch(function(error) {
        console.log(error);
      })
  }

}
module.exports = monsterGetMonster;
