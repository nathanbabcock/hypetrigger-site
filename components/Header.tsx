import styles from '../styles/Header.module.scss'
import packageJSON from '../../hypetrigger/package.json'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="https://hypetrigger.io" className={styles.homeLink}>
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="Hypetrigger logo, a yellow lightning bolt inside a circle with parentheses around it"
        />
        <span className={styles.siteName}>Hypetrigger</span>
        <span className={styles.version}>v{packageJSON.version}</span>
      </a>

      <nav className={styles.nav}>
        <ul>
          {/* <li>Try online</li> */}
          {/* <li>Supported games</li> */}
          <li>
            <a
              href="https://techcrunch.com/2021/09/10/3-methodologies-for-automated-video-game-highlight-detection-and-capture/"
              target="blank"
            >
              Read the article
            </a>
          </li>
          <li>
            <a href="/download">Download client</a>
          </li>
          <li>
            <a href="https://discord.gg/vCadVCzWM9" target="blank">
              Join Discord
            </a>
          </li>
        </ul>
      </nav>

      <a href="#download" className="btn-lg">
        Download for free
      </a>
    </header>
  )
}
