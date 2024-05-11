if (Notification.permission == 'default') {
    Notification.requestPermission();
}

function iframeCheck() {
    var check = false

    if (window.self !== window.top) {
        var check = true;
    }

    return check;
}

var inIframe;

if (iframeCheck()) {
    var inIframe = true;
    console.log('Loaded...');
} else if (iframeCheck() != true) {
    var inIframe = false;
    console.log('Loaded...');
}