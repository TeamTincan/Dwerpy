function openNewTab(url, unblock) {
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
        url = 'https://' + url;
    }

    if (unblock) {
        url = window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(url);
    }

    let win = window.open('about:blank', '_blank');

    if (!win) {
        window.alert('Popups Blocked...\nPlease allow popups!');
    } else {
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        win.document.title = 'Home';

        let iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        iframe.style.margin = '0';
        iframe.style.overflow = 'hidden';
        iframe.referrerPolicy = 'no-referrer';
        iframe.allowFullscreen = true;
        iframe.src = url;
        iframe.id = 'PlayIframe';

        let favicon = win.document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = '/Images/GoogleClassroom.png';

        win.document.head.appendChild(favicon);
        win.document.body.appendChild(iframe);
    }

    return win;
}