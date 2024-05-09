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

var randomQuoteText = document.getElementById('randomQuoteText');

if (randomQuoteText) {
    randomQuoteText.textContent = randomQuoteList[(Math.floor(Math.random() * randomQuoteList.length))];
}

function btnPlay() {
    alert('Wait a bit longer bro, still updating and added stuff!');
}

function openNewTab(url) {
    if (url.substring(0, 8) !== 'https://' && url.substring(0, 7) !== 'http://') {
        url = 'https://' + url;
    }

    var win = window.open();

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
