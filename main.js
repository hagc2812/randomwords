chrome.app.runtime.onLaunched.addListener(function() {
    var options = {
        type : "image",
        title: "Random Words",
        message: "Word of the " + Date.now() + "",
        iconUrl: "icon.png",
        imageUrl: "image.png"
    };
    chrome.notifications.create("id", options);
});
