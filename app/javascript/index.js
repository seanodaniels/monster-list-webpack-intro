require("../css/app.css");

import monsterPopulatePage from './monsterPopulatePage.js';
import monsterGetMonster from './monsterGetMonster.js';
  window.grabMonster = monsterGetMonster;

$(document).ready(function() {

    fetch('http://www.dnd5eapi.co/api/monsters/')
      .then(function(response) {
        return response.json()
        // console.log("2");
      }).then(function(data) {
        // Yay! Do things.
        monsterPopulatePage.monsterFill(data);
      }).catch(function(error) {
        console.log(error);
      })
});
