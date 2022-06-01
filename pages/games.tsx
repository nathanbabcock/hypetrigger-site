import type { InferGetStaticPropsType } from 'next'
import { getConfigs } from '../data/game-configs'

export const getStaticProps = async () => ({
  props: {
    message: 'Hello World',
    games: getConfigs(),
  },
})

export type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ message, games }: InferredProps) {
  return (
    <>
      <h1>Games</h1>
      <p>{message}</p>
      <ul>
        {games?.map((game, i) => (
          <li key={i}>
            <a href={`/games/${game}`}>{game}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
