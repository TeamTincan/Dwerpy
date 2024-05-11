function openNewTab(url, unblock) {
    if (url.substring(0, 8) !== 'https://' && url.substring(0, 7) !== 'http://') {
        url = 'https://' + url;
    }

    if (unblock) {
        var url = window.location.origin.concat(__uv$config.prefix + __uv$config.encodeUrl(url));
    }

    var win = window.open('about:blank', '_blank');

    if (win === null || typeof win === 'undefined') {
        window.alert('Popups Blocked... \nAllow Popups!');
    }

    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.title = 'Home';

    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.margin = '0';
    iframe.style.overflow = 'hidden';
    iframe.referrerPolicy = 'no-referrer';
    iframe.allowFullscreen = true;
    iframe.src = url;
    iframe.id = 'PlayIframe';

    var favicon = win.document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/Images/GoogleClassroom.png';

    win.document.head.appendChild(favicon);
    win.document.body.appendChild(iframe);

    return win;
}