import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* TODO banner image somehow... */}
      <main>
        <h1>Automatic highlight clips</h1>
        <p>
          Clipping used to be as easy as pressing a button.{' '}
          <strong>Now it's even easier.</strong>
        </p>
        <a href="/screenshots/0.10.0.png" target="blank">
          <img
            className={styles.screenshot}
            src="/screenshots/0.10.0.png"
            alt="Screenshot of Hypetrigger v0.10.0"
          />
        </a>
        <h2>
          Automatically record gaming highlight videos, GPU accelerated and
          powered by computer vision.
        </h2>
        {/* social buttons */}
      </main>
      <section>
        <h2>Support for most popular games</h2>
      </section>
      <section>
        <h2>Intuitive UI, powerful AI</h2>
        <ol>
          <li>Put in gameplay videos</li>
          <li>Each frame is analyzed for known triggers</li>
          <li>Clips are generated at each event</li>
        </ol>
      </section>
      <section>
        <h2>Lightning fast features</h2>
      </section>
      <section>
        <h2>Free download for Windows</h2>
      </section>
      <section>
        <h2>Patch notes in your inbox</h2>
        <p>
          Stay up to date with the latest development. Weekly updates all
          summer!
        </p>
        <input type="text" placeholder="tim@apple.com" />
        <button>Send</button>
      </section>
    </div>
  )
}

export default Home
