const randomQuoteList = [
    'Skibidi Ohio Gyatt Rizzler',
    'W Rizz?',
    'RAHHHHHHH!',
    'Cats or Dogs?',
    'Florida Man',
    'Smiley :)',
    'Got me like...',
    '¿Tradujiste esto?',
    'Milk before cereal',
    'Game is Game',
    'Cow go Moooo!',
    'Do yo workkk!! >:CC',
    'Whatcha think?',
    '2+2=fish',
    'No, just no...',
    'Ooga Booga',
    'monkie',
    'Man said Bomboclap????',
    'Its a bird? Its a plane? No its DWERPY!',
    'Errorr!?! jk',
    'looka here',
    'WOOOOF!!!',
    'I am crazy',
    'My sleep schedule --> Pro',
    'Ngl Minecraft plrs are chill asf',
    'Did u remember to do yo HW?',
    'Best site EVRR!',
    'pro gamar',
    'Blanket so warm',
    'potato',
    'Icecrem so gooodd! :P',
    'Pen Spinning --> Superior',
    'Locked in rn',
    'LET HIM COOK NOW!',
    'Bouta eat food',
    'Pizza > Any other food',
    'Candy yummy',
    '2020 was crazy',
    'New year new me? Nahh',
    'Where my hug at?',
    'This list has over 50 quotes!',
    'Nahhh thats crazy',
    'That one friend :',
    'Hit that play button :C',
    'Dont overuse emojis man',
    'This goes on forever tbh',
    'real',
    'Crazy big',
    'Brainrot is everywhere',
    'You cant escape...',
    'bruv',
    'Sub to Rac3trase on YT!'
];

const form = document.getElementsByClassName('formSearch')[0];
const input = document.getElementsByClassName('search-input')[0];
var main = document.getElementById('Main');

if (form && input) {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

            window.alert('If it does not work the first time click again!')
            openNewTab(window.location.origin.concat(__uv$config.prefix + __uv$config.encodeUrl(url)));
        });
    });
}

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

var randomQuoteText = document.getElementById('randomQuoteText');

if (randomQuoteText) {
    randomQuoteText.textContent = randomQuoteList[(Math.floor(Math.random() * randomQuoteList.length))];
}

function openDiscoInv() {
    // window.location.href = 'discord://-/invite/Uja83xcr5S/login';
    window.location.href = '/Invite/index.html'
}

function btnPlay() {
    window.location.href = '/Games/index.html';
}

function btnPlay2() {
    window.location.href = '/Apps/index.html';
}

function cloakTab() {
    if (inIframe) {
        window.alert('Already Cloaked!');
    } else {
        openNewTab(window.location.href);
        window.location.href = 'https://google.com';
    }
}