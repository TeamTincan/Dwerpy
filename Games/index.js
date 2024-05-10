function iframeCheck() {
    var check = false

    if (window.self !== window.top) {
        var check = true;
    }

    return check;
}

if (iframeCheck()) {
    console.log('Loaded... | In Iframe');
} else if (iframeCheck() != true) {
    console.log('Loaded... | Outside Iframe');
}

function cloakTab() {
    openNewTab(window.location.href);
    window.location.href = 'https://google.com';
}