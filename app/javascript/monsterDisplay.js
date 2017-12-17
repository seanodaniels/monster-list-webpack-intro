let monsterDisplay = {
  printEntry: function(data) {
    $('#monster-viewer').empty();
    $('#monster-viewer').append('<h2>' + data.name + '</h2>\n<p>');

    for (var key in data) {
      // console.log(key + "->" + data[key]);
      if (data[key]) {
        if (typeof(data[key]) != 'object') {
          var dontDisplay = ['_id','name','index','url'];
          // if (key !== dontDisplay[0]) {
          if (dontDisplay.indexOf(key) == -1) {
            $('#monster-viewer').append('<div class="monster-attribute"><span class="itemName">'
              + key.split('_').join(' ')
              + ':</span> <span class="item-value">'
              + data[key]
              + '</span></div>');
          }
        };

        if (typeof(data[key]) == 'object') {
          specialAbilityID = key.split('_').join('-');
          $('#monster-viewer').append('<div class="special-ability" id="' + specialAbilityID + '">');
          $('#' + specialAbilityID).append('<h3>' + key.split('_').join(' ') + ':</h3>');
          var objectAttribute = data[key];
          // console.log(insideObject);
          for (var keyObjectAttribute in objectAttribute){
            var objectAttributeValue = objectAttribute[keyObjectAttribute]

            // Name
            if (objectAttributeValue['name']) {
              $('#' + specialAbilityID).append('<h4>'+ objectAttributeValue['name'] + '</h4>');
            }

            // Description
            if (objectAttributeValue['desc']) {
              $('#' + specialAbilityID).append('<span class="itemName">Description:</span> <span class="item-value">'+ objectAttributeValue['desc'] + '</span><br />');
            }

            // Attack
            if (objectAttributeValue['attack_bonus']) {
              $('#' + specialAbilityID).append('<span class="itemName">Attack:</span> <span class="item-value">'+ objectAttributeValue['attack_bonus'] + '</span><br />');
            }

            // Damage
            if (objectAttributeValue['damage_dice']) {
              if (objectAttributeValue['damage_bonus']) {
                var damageBonus = ' + ' + objectAttributeValue['damage_bonus'];
              } else { damageBonus = ''; }

              $('#' + specialAbilityID).append('<span class="itemName">Damage:</span> <span class="item-value">'+ objectAttributeValue['damage_dice'] + damageBonus + '</span><br />');
            }






            for (var objectAttributeValueKey in objectAttributeValue) {

              if ((objectAttributeValueKey !== 'name')
                && (objectAttributeValueKey !== 'desc')
                && (objectAttributeValueKey !== 'attack_bonus')
                && (objectAttributeValueKey !== 'damage_dice')
                && (objectAttributeValueKey !== 'damage_bonus')
              )
              {
                // Everything else
                $('#' + specialAbilityID).append(
                  '<span class="itemName">'
                  + objectAttributeValueKey.split('_').join(' ')
                  + ':</span> <span class="item-value">'
                  + objectAttributeValue[objectAttributeValueKey]
                  + '</span><br />'
                );

              };
            };

          };
        };
      };
    }

    // if (data.size) { $('#monster-viewer').append('<span class="itemName">Size:</span> <span class="item-value">' + data.size + '</span><br />')};
    // if (data.type) { $('#monster-viewer').append('<span class="itemName">Type:</span> <span class="item-value">' + data.type + '</span><br />')};
    // if (data.subtype) { $('#monster-viewer').append('<span class="itemName">Subtype:</span> <span class="item-value">' + data.subtype + '</span><br />')};
    // if (data.alignment) { $('#monster-viewer').append('<span class="itemName">Alignment:</span> <span class="item-value">' + data.alignment + '</span><br />')};
    // if (data.armor_class) { $('#monster-viewer').append('<span class="itemName">AC:</span> <span class="item-value">' + data.armor_class + '</span><br />')};
    // if (data.hit_points) { $('#monster-viewer').append('<span class="itemName">HP:</span> <span class="item-value">' + data.hit_points + '</span><br />')};
    // if (data.hit_dice) { $('#monster-viewer').append('<span class="itemName">Hit Dice:</span> <span class="item-value">' + data.hit_dice + '</span><br />')};
    // if (data.speed) { $('#monster-viewer').append('<span class="itemName">Speed:</span> <span class="item-value">' + data.speed + '</span><br />')};
    // if (data.strength) { $('#monster-viewer').append('<span class="itemName">STR:</span> <span class="item-value">' + data.strength + '</span><br />')};
    // if (data.dexterity) { $('#monster-viewer').append('<span class="itemName">DEX:</span> <span class="item-value">' + data.dexterity + '</span><br />')};
    // if (data.constitution) { $('#monster-viewer').append('<span class="itemName">CON:</span> <span class="item-value">' + data.constitution + '</span><br />')};
    // if (data.intelligence) { $('#monster-viewer').append('<span class="itemName">INT:</span> <span class="item-value">' + data.intelligence + '</span><br />')};
    // if (data.wisdom) { $('#monster-viewer').append('<span class="itemName">WIS:</span> <span class="item-value">' + data.wisdom + '</span><br />')};
    // if (data.charisma) { $('#monster-viewer').append('<span class="itemName">CHA:</span> <span class="item-value">' + data.charisma + '</span><br />')};

    $('#monster-viewer').append('\n<p>');
  },
}

module.exports = monsterDisplay;
//exports default monsterDisplay;
