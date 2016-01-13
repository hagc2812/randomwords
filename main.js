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
          iconUrl: "icon.png",
          imageUrl: "image.png"
        };
        chrome.notifications.create("id" + Date.now(), options);
	console.log("Notification " + Date.now());
    });
    chrome.alarms.create("alarm1", alarminfo);

});

