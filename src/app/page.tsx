import Image from 'next/image';
import styles from './page.module.css';
import Script from 'next/script';


async function getIdea() {
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
    cache: 'no-store'
  };

  const res = await fetch('http://api.bybaltika.by/api/idea', options);
  return res.json();
}

export default async function Home() {

  let idea = await getIdea();

  return (
    <main className="wrap">
      <header className="header">
        <img src="img/logo.svg" className="logo" alt="Балтика" />
        <div className="share__box">
          <button className="button share__button">поделиться</button>
          <div className="share__container">
            <button className="share__link copy__link">
              <img src="img/link.svg" alt="" />
            </button>
            <a href="https://t.me/share/url?url={url}&text={text}" target="_blank" rel="nofollow noopener" className="share__link">
              <img src="img/tg.svg" alt="" />
            </a>
            <a href="https://vk.com/share.php?url=http://mysite.com" target="_blank" rel="nofollow noopener" className="share__link">
              <img src="img/vk.svg" alt="" />
            </a>
            <a href="https://twitter.com/intent/tweet?url=<?=urlencode($url)?>" target="_blank" rel="nofollow noopener" className="share__link">
              <img src="img/twitter.svg" alt="" />
            </a>
            <a href="https://connect.ok.ru/offer?url=http://mysite.com" target="_blank" rel="nofollow noopener" className="share__link">
              <img src="img/ok.svg" alt="" />
            </a>
          </div>
        </div>
      </header>
      <form action="" className="form">
        <div className="form__line">
          <div className="form__line--main">
            {/* <h1 className="form__heading">Идеи для летних встреч</h1> */}
            <img src="img/outline.png" className='form__name' alt="Идеи для летних встреч" />
            <input type="text" className="form__input" disabled value={idea.text} />
          </div>
          <button type="submit" className="form__button">
            <span className="form__button--text">ещё</span>
            <img src="img/anim.svg" className="form__button--img" alt="Анимация загрузки" />
          </button>
        </div>
      </form>
      <img src="img/sign.svg" className="sign" alt="Чрезмерное употребление..." />
      <Script src="js/scripts.js"></Script>
    </main>
  );

  {
    /* <main className={styles.main}>
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/app/page.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className={styles.grid}>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore the Next.js 13 playground.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>
  </main> */
  }
}
