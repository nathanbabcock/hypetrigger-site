import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import getConfig from '../../src/get-config'
import getConfigs from '../../src/get-configs'

export const getStaticProps = async (context: GetStaticPropsContext) => ({
  props: {
    config: getConfig(context.params!.game as string),
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
export default function GamePage({ config }: InferredProps) {
  const router = useRouter()
  const { gameId: game } = router.query

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
