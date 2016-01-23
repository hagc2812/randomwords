chrome.app.runtime.onLaunched.addListener(function() {
    var alarminfo = {
        when: Date.now(),
	   periodInMinutes: 1
    };

    chrome.alarms.onAlarm.addListener(function( alarm ){
	   var options = {
          type : "image",
          title: "Random Words",
          message: "Word of the " + Date.now() + "",
          iconUrl: "http://static.sfdict.com/sizedimage/sizedimage?width=455&height=455&url=http%3A%2F%2Fstatic.sfdict.com%2Fstatic%2Fwotd%2Ftiles%2F20160123_selenology.png",
          imageUrl: "http://static.sfdict.com/sizedimage/sizedimage?width=455&height=455&url=http%3A%2F%2Fstatic.sfdict.com%2Fstatic%2Fwotd%2Ftiles%2F20160123_selenology.png"
        };
        //chrome.notifications.create("id" + Date.now(), options);

        var n = new Notification("Random Words", getOptions());

	console.log("Notification " + Date.now());
    });
    chrome.alarms.create("alarm1", alarminfo);

});


function getOptions() {
  // var html = GET THE URL
  var element = .getElementsByClassName('definition-header');
  console.log(element.innerHTML);

  return {tile: "test.", body: "ticatica"};
}
