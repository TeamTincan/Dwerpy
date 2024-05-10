var main = document.getElementById('Main');

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
    console.log('Loaded...');
}

function cloakTab() {
    openNewTab(window.location.href);
    window.location.href = 'https://google.com';
}

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('gameInput');
    filter = input.value.toUpperCase();
    li = document.getElementById('Main').getElementsByClassName('btn');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'inline-block';
        } else {
            li[i].style.display = 'none';
        }
    }
}