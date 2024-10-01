let phrases = [
    { text: 'наслаждаться Выборгом', image: './images/viborg.jpg' },
    { text: 'любоваться кирхой в Приморске', image: './images/primorsk.jpg' },
    { text: 'охотиться на Полярное сияние', image: './images/aurora.jpg' },
]

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.header__button');
let phrase = document.querySelector('.lead__phrase');
let advice = document.querySelector('.lead__ideas');
let image = document.querySelector('.lead__image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '32px';
    } else {
        advice.style.fontSize = '36px';
    }
});

for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}