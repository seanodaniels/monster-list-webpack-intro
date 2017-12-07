require("../css/app.css");
var populateThisPage = require('./populatePage.js');
var grabMonster = require('./getMonster.js');
  window.grabMonster = grabMonster;

$(document).ready(function() {

    fetch('http://www.dnd5eapi.co/api/monsters/')
      .then(function(response) {
        return response.json();
        // console.log("2");
      }).then(function(data) {
        // Yay! Do things.
        populateThisPage.monsterFill(data);
      }).catch(function(error) {
        console.log(error);
      })
});
