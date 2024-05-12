if (Notification.permission === 'default') {
    Notification.requestPermission();
}

function iframeCheck() {
    let check = false;

    if (window.self !== window.top) {
        check = true;
    }

    return check;
}

const inIframe = iframeCheck();

if (inIframe) {
    console.log('Loaded in iframe...');
} else {
    console.log('Loaded...');
}