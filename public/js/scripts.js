// подстановка ссылок в расшаривание
function link() {
  console.log(document.querySelectorAll('meta[property="og:image"]')[0]);
  let text = document.querySelector('.form__input').value;
  document.querySelector('.share__link--tg').href = 'https://t.me/share/url?url=' + window.location.href;
  document.querySelector('.share__link--vk').href = 'https://vk.com/share.php?url=' + window.location.href;
  document.querySelector('.share__link--twitter').href =
    'https://twitter.com/intent/tweet?text=' + text + '&url=' + window.location.href;
  document.querySelector('.share__link--ok').href = 'https://connect.ok.ru/offer?url=' + window.location.href;
}

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
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    cache: 'no-store',
  };

  const res = await fetch('https://api.bybaltika.by/api/idea', options);
  return res.json();
}

// клик по кнопке "еще"
document.querySelector('.form__button').addEventListener('click', async (e) => {
  e.preventDefault();
  loader();

  const idea = await getIdea();

  document.querySelector('.form__input').value = idea.text;
  document.title = idea.text;

  const url = new URL(window.location.href);
  url.searchParams.set('id', idea.id);
  window.history.replaceState(null, null, url); // or pushState

  link();
});

// fadein для блока при загрузке страницы
setTimeout(() => {
  document.querySelector('.form').classList.add('is-active');
  loader();
  link();
}, '1500');

// share
const shareBtn = document.querySelector('.share__button');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('is-active');
});

async function copyPageUrl() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    console.log('Ссылка скопирована!');
  } catch (err) {
    console.error('Ошибка: ', err);
  }
}

document.querySelector('.copy__link').addEventListener('click', (async) => {
  copyPageUrl();

  setTimeout(() => {
    alert('Ссылка скопирована!');
  }, '1');
});
