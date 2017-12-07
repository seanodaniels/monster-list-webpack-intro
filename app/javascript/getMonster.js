var goMonster = require('./showMonster.js');

var getMonster = {

  getByURL: function(url) {

      fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        goMonster.printEntry(data);
      }).catch(function(error) {
        console.log(error);
      })
  }

}
module.exports = getMonster;
