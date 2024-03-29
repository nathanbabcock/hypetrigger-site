import clsx from 'clsx'
import type { InferGetStaticPropsType } from 'next'
import Layout from '../components/Layout'
import SearchLights from '../components/SearchLights'
import SocialButtons from '../components/SocialButtons'
import { getConfig, getConfigIds } from '../fetch/game-configs'
import { getGameInfo } from '../fetch/igdb'
import { getCoverImg } from '../fetch/igdb-img'
import beta from '../public/download/beta.json'
import latest from '../public/download/latest.json'
import styles from '../styles/Home.module.scss'
import shuffle from '../util/shuffle'

type FeaturedGame = {
  name: string
  id: string
  url: string
}

const NUM_FEATURED_GAMES = 9
export const getStaticProps = async () => {
  const configIds = getConfigIds()
  shuffle(configIds)
  const featuredGames: FeaturedGame[] = []
  let i = 0
  for (const id of configIds) {
    if (i++ >= NUM_FEATURED_GAMES) break
    const config = getConfig(id)
    const gameInfo = await getGameInfo(config)

    if (!gameInfo || featuredGames.find(game => game.name === gameInfo.name)) {
      --i
      continue
    }

    featuredGames.push({
      name: gameInfo.name,
      url: getCoverImg(gameInfo.cover.image_id),
      id,
    })
  }

  return {
    props: { featuredGames },
  }
}

type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function Home(props: InferredProps) {
  return (
    <Layout inject={<SearchLights />}>
      <div className={styles.container}>
        <MainSection />
        <GamesSection {...props} />
        <VideoSection />
        <DownloadSection />
        {/* <EmailSignupSection /> */}
      </div>
    </Layout>
  )
}

function MainSection() {
  return (
    <main className={styles.main}>
      <div className={styles.topText}>
        <h1>
          Record automatic highlight clips <u>from your browser</u>
        </h1>
        <p>
          No download necessary, starting in <code>v0.15</code> Beta. Features
          include <b>Screen Capture</b>, <b>Autoclip</b>, and{' '}
          <b>Replay Buffer</b>.
        </p>
        <p>
          👉 <a href="/app">Check it out</a> 👈
        </p>
        {/* <h1>Automatic highlight clips</h1>
        <p>
          Clipping used to be as easy as pressing a button.{' '}
          <strong>Now it's even easier.</strong>
        </p> */}
      </div>
      <a href="/screenshots">
        <img
          className={clsx('screenshot', styles.screenshot)}
          src="/screenshots/0.10.0.png"
          alt="Screenshot of Hypetrigger v0.10.0"
        />
      </a>
      <SocialButtons />
      <h2>Lightning fast / GPU-accelerated / computer vision</h2>
    </main>
  )
}

function VideoSection() {
  return (
    <section className={styles.video}>
      <h2 id="tutorial">Tutorial: Getting started</h2>
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/E_YLbu7cz4w"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  )
}

function GamesSection({ featuredGames }: InferredProps) {
  return (
    <section className={styles.gamesSection}>
      <h2>
        <a href="/games">Support for most popular games</a>
      </h2>
      <div className={styles.featuredGames}>
        {featuredGames.map(({ name, url, id }) => (
          <a href={`/games/${id}`} key={id} title={name}>
            <img src={url} alt={name} className="cover-img" />
          </a>
        ))}
      </div>
      <a className="btn-lg" href="/games">
        See all games
      </a>
    </section>
  )
}

function DownloadSection() {
  return (
    <>
      <section id="download" className={styles.downloadSection}>
        <h2>Download Hypetrigger for Windows and Linux</h2>
        <div className={styles.downloadWrapper}>
          <a
            href={latest.platforms['windows-x86_64'].url}
            className={`${styles.downloadBtn} ${styles.downloadSecondary}`}
          >
            <div className={styles.downloadRight}>
              <span className={styles.downloadLabel}>Windows Stable</span>
              <span className={styles.downloadVersion}>
                <code>{latest.version}</code> for Windows
              </span>
            </div>
          </a>
          <a
            href={beta.platforms['windows-x86_64'].url}
            className={styles.downloadBtn}
          >
            <img src="/img/logo.svg" className={styles.downloadLogo} alt="" />
            <div className={styles.downloadRight}>
              <span className={styles.downloadLabel}>Windows Beta</span>
              <span className={styles.downloadVersion}>
                <code>{beta.version}</code> Beta for Windows
              </span>
            </div>
          </a>
          {/* <a
            href={latest.platforms['windows-x86_64'].url}
            className={styles.downloadStable}
          >
            Or download the latest stable release instead:{' '}
            <strong>
              <code>{latest.version}</code>
            </strong>{' '}
            for Windows
          </a> */}
          <a
            href="https://hypetrigger-downloads.s3.amazonaws.com/hypetrigger-beta_0.15.9_amd64.AppImage"
            className={`${styles.downloadBtn} ${styles.downloadSecondary}`}
          >
            <div className={styles.downloadRight}>
              <span className={styles.downloadLabel}>Linux Beta</span>
              <span className={styles.downloadVersion}>
                <code>0.15.9</code> Beta for Linux
              </span>
            </div>
          </a>
        </div>
      </section>
      <p className={styles.downloadNote}>
        Last updated <code>{beta.pub_date}</code>
      </p>
    </>
  )
}

function EmailSignupSection() {
  return (
    <section>
      <h2>Patch notes in your inbox</h2>
      <p>
        Stay up to date with the latest development. Weekly updates all summer!
      </p>
      <input type="text" placeholder="tim@apple.com" />
      <button>Send</button>
    </section>
  )
}
