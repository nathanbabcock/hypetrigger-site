import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { getConfig, getConfigIds } from '../../fetch/game-configs'
import { getGameInfo } from '../../fetch/igdb'
import { getCoverImg } from '../../fetch/igdb-img'

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

export type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ config, gameInfo }: InferredProps) {
  const router = useRouter()
  const { gameId: game } = router.query

  return (
    <>
      <h1>Game: {game}</h1>
      <p>Blah blah blah</p>

      <img src={getCoverImg(gameInfo?.cover.image_id)} alt={config.title} />

      <pre>
        <code>{JSON.stringify(gameInfo, null, 2)}</code>
      </pre>

      <pre>
        <code>{JSON.stringify(config, null, 2)}</code>
      </pre>
    </>
  )
}
