// Функционал смены картинки и текста
let phrases = [
    { text: 'наслаждаться Выборгом', image: './images/viborg.jpg' },
    { text: 'любоваться кирхой в Приморске', image: './images/primorsk.jpg' },
    { text: 'охотиться на Полярное сияние', image: './images/aurora.jpg' },
    { text: 'найти границу со Швецией', image: './images/border.jpg' },
    { text: 'посетить кирху в Пушкине', image: './images/pushkin.jpg' },
    { text: 'собирать белые грибы', image: './images/mushrooms.jpg' },
    { text: 'гулять по Сестрорецкому болоту', image: './images/swamp.jpg' },
    { text: 'исследовать Комаровский берег', image: './images/komarovo.jpg' },
    { text: 'поехать в Зеленогорск', image: './images/zelenogorsk.jpg' },
    { text: 'высадиться на Западный Котлин', image: './images/kotlin.jpg' },
    { text: 'залечь на дно в Приозерске', image: './images/priozersk.jpg' },
    { text: 'отыскать линию Маннергейма', image: './images/line.jpg' },
    { text: 'бродить по Линдуловской роще', image: './images/grove.jpg' },
    { text: 'сфотографировать финскую кирху в Мельниково', image: './images/melnikovo.jpg' },
    { text: 'сфотографировать финскую кирху в Севастьяново', image: './images/kaukola.jpg' },
    { text: 'бросить всё и уехать в Токсово', image: './images/toksovo.jpg' },
    { text: 'посмотреть на руины церкви в Каннельярве', image: './images/kanelyarvi.jpg' },

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

// Попап о проекте
const aboutButton = document.querySelector('.footer__button');
const aboutPopup = document.querySelector('.popup_about');
const aboutCloseButton = aboutPopup.querySelector('.popup__close-btn');

aboutButton.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPopup.classList.add('popup_opened');
});

aboutCloseButton.addEventListener('click', () => {
    aboutPopup.classList.remove('popup_opened');
});

aboutPopup.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        aboutPopup.classList.remove('popup_opened');
    };
});