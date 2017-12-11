require("../css/app.css");

var monsterPopulatePage = require('./monsterPopulatePage.js');
var monsterGetMonster = require('./monsterGetMonster.js');
  window.grabMonster = monsterGetMonster;

$(document).ready(function() {

    fetch('http://www.dnd5eapi.co/api/monsters/')
      .then(function(response) {
        return response.json();
        // console.log("2");
      }).then(function(data) {
        // Yay! Do things.
        monsterPopulatePage.monsterFill(data);
      }).catch(function(error) {
        console.log(error);
      })
});
