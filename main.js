var parser=new DOMParser();
var xmlDoc;
var title;
var body;
var options;
var url = "http://dictionary.reference.com/wordoftheday/"
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            xmlDoc=parser.parseFromString(xhr.responseText,"text/html");
            title = xmlDoc.getElementsByClassName("definition-header")[0].innerText;
            body = xmlDoc.getElementsByClassName("definition-list")[0].innerText;
            options = {title: title, body: body};
            console.log(xmlDoc);
            console.log(xmlDoc.getElementsByClassName("definition-header")[0]);
            console.log(xmlDoc.getElementsByClassName("definition-list")[0]);
            console.log(title);
            console.log(body);
            console.log(options);
            // return options;
        }
    }
};

chrome.app.runtime.onLaunched.addListener(function() {
    var alarminfo = {
        when: Date.now(),
	   periodInMinutes: 1
    };

    chrome.alarms.onAlarm.addListener(function( alarm ){

      console.log(xhr);

	   // var options = {
    //       type : "image",
    //       title: "Random Words",
    //       message: "Word of the " + Date.now() + "",
    //       iconUrl: "http://static.sfdict.com/sizedimage/sizedimage?width=455&height=455&url=http%3A%2F%2Fstatic.sfdict.com%2Fstatic%2Fwotd%2Ftiles%2F20160123_selenology.png",
    //       imageUrl: "http://static.sfdict.com/sizedimage/sizedimage?width=455&height=455&url=http%3A%2F%2Fstatic.sfdict.com%2Fstatic%2Fwotd%2Ftiles%2F20160123_selenology.png"
    //     };
        //chrome.notifications.create("id" + Date.now(), options);

        console.log(options);
        var n = new Notification("Random Words", options);
        // console.log(getOptions());
	console.log("Notification " + Date.now());
    });
    chrome.alarms.create("alarm1", alarminfo);

});




  // console.log("here")
  // console.log(xhr);
  // xmlDoc=parser.parseFromString(xhr.responseText,"text/html");
  // console.log(xmlDoc);
  // title = xmlDoc.getElementsByClassName("definition-header")[0].innerText;
  // body = xmlDoc.getElementsByClassName("definition-list")[0].innerText;
  // options = {title: title, body: body};

  // console.log(xmlDoc);
  // console.log(xmlDoc.getElementsByClassName("definition-header")[0]);
  // console.log(xmlDoc.getElementsByClassName("definition-list")[0]);
  // console.log(title)
  // console.log(body)

  // return options;
