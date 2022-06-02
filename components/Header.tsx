import clsx from 'clsx'
import type { ComponentProps } from 'react'
import packageJSON from '../../hypetrigger/package.json'
import { DISCORD_INVITE } from '../fetch/discord'
import styles from '../styles/Header.module.scss'

export default function Header(props: ComponentProps<'header'>) {
  return (
    <header {...props} className={clsx(styles.header, props.className)}>
      <a href="/" className={styles.homeLink}>
        <img className={styles.logo} src="/img/logo.svg" alt="" />
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
            <a href={DISCORD_INVITE} target="blank">
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
