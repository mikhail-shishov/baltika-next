import Image from 'next/image'
import styles from './page.module.css'
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <main className="wrap">
    <header className="header">
      <img src="img/logo.svg" className="logo" alt="" />
      <button className="button">поделиться</button>
    </header>
    <form action="" className="form">
      <div className="form__line">
        <div className="form__line--main">
          <h1 className="form__heading">Идеи для летних встреч</h1>
          <input type="text" className="form__input" disabled />
        </div>
        <button type="submit" className="form__button"><span className="form__button--text">ещё</span><img src="img/anim.svg" className="form__button--img" alt="Анимация загрузки"/></button>
      </div>
    </form>
    <img src="img/sign.svg" className="sign" alt="Чрезмерное употребление..." />
    <script src='js/scripts.js'></script>
    {/* <Helmet>
        <script src="js/scripts.js" />
    </Helmet> */}
  </main>
  )


  {/* <main className={styles.main}>
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
  </main> */}
}
