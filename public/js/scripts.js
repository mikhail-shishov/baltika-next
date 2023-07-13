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
