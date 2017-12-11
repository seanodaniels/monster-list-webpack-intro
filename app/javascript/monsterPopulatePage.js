var monsterPopulatePage = {

  monsterFill: function(data) {
    console.log(data.count);

    data.results.forEach(function(item) {
  //  $.each(data.results, function(monster){
  // why did that not work?
      // console.log(item.name);

      // List of all SRD Monsters
      $('#monster-list').append(
        '<li><button onClick="javascript:grabMonster.getByURL(\'' + item.url + '\')">' + item.name + '</button></li>'
      );
    });

  }

}

module.exports = monsterPopulatePage;
