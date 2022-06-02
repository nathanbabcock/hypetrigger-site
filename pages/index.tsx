import clsx from 'clsx'
import type { InferGetStaticPropsType } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchLights from '../components/SearchLights'
import SocialButtons from '../components/SocialButtons'
import { getConfig, getConfigIds } from '../fetch/game-configs'
import { getGameInfo } from '../fetch/igdb'
import { getCoverImg } from '../fetch/igdb-img'
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
    <>
      <SearchLights />
      <div className="wrapper">
        <Header className={styles.header} />
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.topText}>
              <h1>Automatic highlight clips</h1>
              <p>
                Clipping used to be as easy as pressing a button.{' '}
                <strong>Now it's even easier.</strong>
              </p>
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
          <GamesSection {...props} />
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
      </div>
      <Footer />
    </>
  )
}

function GamesSection({ featuredGames }: InferredProps) {
  return (
    <section>
      <h2>Support for most popular games</h2>
      <div className={styles.featuredGames}>
        {featuredGames.map(({ name, url, id }) => (
          <a href={`/games/${id}`} key={id} title={name}>
            <img src={url} alt={name} className="cover-img" />
          </a>
        ))}
      </div>
      <a href="/games">See all games</a>
    </section>
  )
}
