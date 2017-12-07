var showMonster = {
  printEntry: function(data) {
    $('#monster-viewer').empty();
    $('#monster-viewer').append('<h2>' + data.name + '</h2>\n<p>');

    if (data.size) { $('#monster-viewer').append('<span class="itemName">Size:</span> <span class="item-value">' + data.size + '</span><br />')};
    if (data.type) { $('#monster-viewer').append('<span class="itemName">Type:</span> <span class="item-value">' + data.type + '</span><br />')};
    if (data.subtype) { $('#monster-viewer').append('<span class="itemName">Subtype:</span> <span class="item-value">' + data.subtype + '</span><br />')};
    if (data.alignment) { $('#monster-viewer').append('<span class="itemName">Alignment:</span> <span class="item-value">' + data.alignment + '</span><br />')};
    if (data.armor_class) { $('#monster-viewer').append('<span class="itemName">AC:</span> <span class="item-value">' + data.armor_class + '</span><br />')};
    if (data.hit_points) { $('#monster-viewer').append('<span class="itemName">HP:</span> <span class="item-value">' + data.hit_points + '</span><br />')};
    if (data.hit_dice) { $('#monster-viewer').append('<span class="itemName">Hit Dice:</span> <span class="item-value">' + data.hit_dice + '</span><br />')};
    if (data.speed) { $('#monster-viewer').append('<span class="itemName">Speed:</span> <span class="item-value">' + data.speed + '</span><br />')};
    if (data.strength) { $('#monster-viewer').append('<span class="itemName">STR:</span> <span class="item-value">' + data.strength + '</span><br />')};
    if (data.dexterity) { $('#monster-viewer').append('<span class="itemName">DEX:</span> <span class="item-value">' + data.dexterity + '</span><br />')};
    if (data.constitution) { $('#monster-viewer').append('<span class="itemName">CON:</span> <span class="item-value">' + data.constitution + '</span><br />')};
    if (data.intelligence) { $('#monster-viewer').append('<span class="itemName">INT:</span> <span class="item-value">' + data.intelligence + '</span><br />')};
    if (data.wisdom) { $('#monster-viewer').append('<span class="itemName">WIS:</span> <span class="item-value">' + data.wisdom + '</span><br />')};
    if (data.charisma) { $('#monster-viewer').append('<span class="itemName">CHA:</span> <span class="item-value">' + data.charisma + '</span><br />')};

    $('#monster-viewer').append('\n<p>');
  }
}

module.exports = showMonster;
