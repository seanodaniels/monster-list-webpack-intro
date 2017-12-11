var monsterDisplay = require('./monsterDisplay.js');

var monsterGetMonster = {

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
