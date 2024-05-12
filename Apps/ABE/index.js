var main = document.getElementById('Main');

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('appInput');
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