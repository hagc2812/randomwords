var notification = {
    "TemplateType": "image",
    "iconURL": "../icon.png",
    "title": "Random first",
    "message": "oi",
    "eventTime": "Date.now() + 1000"
};

chrome.notifications.create("O1", notification);
//var alarm = new Alarm();
//chrome.notifications.create("O2", notification);
//alarm.name = "Random Word";
//chrome.notifications.create("O3", notification);
//alarm.scheduledTime = "2000";
//chrome.notifications.create("O4", notification);
//alarm.periodInMinutes = "1.5";
//chrome.notifications.create("O5", notification);
//chrome.alarms.create("Random word", alarm);
//chrome.notifications.create("O6", notification);
