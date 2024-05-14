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

document.addEventListener("load", (event) => {
    const inIframe = iframeCheck();

    if (!inIframe) {
        let popUp = window.open('about:blank', '_blank');
        var noPopup;

        if (!popUp) {
            var noPopup = true;
            alert('It looks like you have Popups blocked! \nIn order for us to hide your history allow Popups. \nThank you.')
        } else {
            popUp.close();
            var noPopup = false;
            openNewTab(window.location.href);
            if (!noPopup) {
                window.location.href = 'https://classroom.google.com';
            }
        }
    }
});