import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getConfig, getConfigs } from '../../data/game-configs'
import { getAccessToken } from '../../data/igdb'

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    config: getConfig(context.params!.game as string),
    gameInfo: await getAccessToken(), //fetchGameInfo(context.params!.game as string),
  },
})

export async function getStaticPaths() {
  const games = getConfigs()
  return {
    paths: games.map(game => ({ params: { game } })),
    fallback: true, // false or 'blocking'
  }
}

export type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ config, gameInfo }: InferredProps) {
  const router = useRouter()
  const { gameId: game } = router.query
  useEffect(() => console.log({ gameInfo }))

  return (
    <>
      <h1>Game: {game}</h1>
      <p>Blah blah blah</p>
      <pre>
        <code>{JSON.stringify(config, null, 2)}</code>
      </pre>
    </>
  )
}
