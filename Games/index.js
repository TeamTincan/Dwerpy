function openDiscoInv() {
    window.location.href = 'discord://-/invite/wf3szSc7hB/login';
}

function btnPlay() {
    alert('Beta, wait for more updates!');
}

function iframeCheck() {
    var check = false

    if (window.self !== window.top) {
        var check = true;
    }

    return check;
}

if (iframeCheck()) {
    console.log('Loaded...');
} else if (iframeCheck() != true) {
    openNewTab(window.location.href);
    window.location.href = 'https://google.com';
}