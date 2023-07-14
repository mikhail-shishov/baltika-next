// колесо загрузки
function loader() {
  document.querySelector('.form').classList.add('is-loading');
  setTimeout(() => {
    document.querySelector('.form').classList.remove('is-loading');
  }, '1000');
}


async function getIdea() {
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
    cache: 'no-store'
  };

  const res = await fetch('http://api.bybaltika.by/api/idea', options);
  return res.json();
}

// клик по кнопке "еще"
document.querySelector('.form__button').addEventListener('click', async (e) => {
  e.preventDefault();
  loader();
  const idea = await getIdea();

  document.querySelector('.form__input').value = idea.text;
});

// fadein для блока при загрузке страницы
setTimeout(() => {
  document.querySelector('.form').classList.add('is-active');
}, '1500');


// share
const shareBtn = document.querySelector('.share__button');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('is-active');
});

document.querySelector('.copy__link').addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  alert('Ссылка скопирована!');
});
