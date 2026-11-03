console.log('Cozy Cafe JavaScript is connected!');
const mainTitleEl = document.querySelector('#main-title');
mainTitleEl.textContent = 'Cozy Cafe';

const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach((el) => {
    console.log(el.textContent);
    el.style.fontStyle = 'italic';
})

const paragraphEls = document.querySelector('#quote-of-the-day');
paragraphEls.textContent = 'A little coffee, a little conversation';
paragraphEls.classList.add('featured');

const mainPhotoEl = document.querySelector('#main-photo');
const currentsrc = mainPhotoEl.getAttribute('src');
mainPhotoEl.setAttribute('src', './assets/berry-cake.avif');
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe');

const buttonEl = document.querySelector('#bg-color-btn')
const bodyEl = document.querySelector('body')
function handleBackgroundChange() {
    bodyEl.style.backgroundColor = 'lavender'
}
buttonEl.addEventListener('click', handleBackgroundChange)