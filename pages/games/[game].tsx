import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Background from '../../components/Background'
import Layout from '../../components/Layout'
import { getConfig, getConfigIds } from '../../fetch/game-configs'
import { getGameInfo } from '../../fetch/igdb'
import { getCoverImg, getFullImg } from '../../fetch/igdb-img'
import styles from '../../styles/Game.module.scss'

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const config = getConfig(context.params!.game as string)
  const gameInfo = (await getGameInfo(config)) ?? null

  return {
    props: { config, gameInfo },
  }
}

export async function getStaticPaths() {
  const games = getConfigIds()
  return {
    paths: games.map(game => ({ params: { game } })),
    fallback: true, // false or 'blocking'
  }
}

type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ config, gameInfo }: InferredProps) {
  const year =
    gameInfo && new Date(gameInfo.first_release_date * 1000).getFullYear()

  return (
    <Layout
      inject={
        <Background src={getFullImg(gameInfo?.screenshots[0]?.image_id)} />
      }
    >
      <div className={styles.gameInfo}>
        <img
          src={getCoverImg(gameInfo?.cover.image_id)}
          alt={config.title}
          className={styles.coverImg}
        />
        <div className={styles.gameInfoRight}>
          <h1>{config.title}</h1>
          {gameInfo && <p>({year})</p>}
          <p>{config.triggers.length} triggers</p>
        </div>
      </div>

      <p>Blah blah blah</p>

      <pre>
        <code>{JSON.stringify(gameInfo, null, 2)}</code>
      </pre>

      <pre>
        <code>{JSON.stringify(config, null, 2)}</code>
      </pre>
    </Layout>
  )
}
