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
  const year =
    gameInfo && new Date(gameInfo.first_release_date * 1000).getFullYear()

  return (
    <>
      <img src={getCoverImg(gameInfo?.cover.image_id)} alt={config.title} />
      <h1>
        {config.title} {gameInfo && `(${year})`}{' '}
      </h1>
      <div>{config.triggers.length} triggers</div>
      <p>Blah blah blah</p>

      <pre>
        <code>{JSON.stringify(gameInfo, null, 2)}</code>
      </pre>

      <pre>
        <code>{JSON.stringify(config, null, 2)}</code>
      </pre>
    </>
  )
}
