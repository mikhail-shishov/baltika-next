let ideas = ['День летнего солнцестояния', 'пример 1', 'пример 2', 'пример 3', 'пример 4', 'пример 5'];

// колесо загрузки
function loader() {
  document.querySelector('.form').classList.add('is-loading');
  setTimeout(() => {
    document.querySelector('.form').classList.remove('is-loading');
  }, '1000');
}

// выборка из массива
function newIdea() {
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * ideas.length);
    document.querySelector('.form__input').value = ideas[randomNumber];

    // let here = new URL(window.location.href);
    // console.log(here);
    // here.searchParams.append('idea', document.querySelector('.form__input').value);
    // here.searchParams.set('idea', document.querySelector('.form__input').value);

    // const urlParams = new URLSearchParams(window.location.search);
    // urlParams.set('idea', document.querySelector('.form__input').value);
    // window.location.search = urlParams;

    // ставим и забираем параметр из урла
    const url = new URL(window.location.href);
    url.searchParams.set('idea', document.querySelector('.form__input').value);
    url.searchParams.delete('param2');
    window.history.replaceState(null, null, url); // or pushState
    console.log(decodeURIComponent(window.location.search.match(/(\?|&)idea\=([^&]*)/)[2]))
  }, '1000');
}

// клик по кнопке "еще"
document.querySelector('.form__button').addEventListener('click', (e) => {
  e.preventDefault();
  loader();
  newIdea();
});

// fadein для блока при загрузке страницы
setTimeout(() => {
  document.querySelector('.form').classList.add('is-active');
}, '1500');

setTimeout(() => {
  newIdea();
  loader();
}, '1400');

// share
const shareBtn = document.querySelector('.share__button');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('is-active');
});

document.querySelector('.copy__link').addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  alert('Ссылка скопирована!');
});
