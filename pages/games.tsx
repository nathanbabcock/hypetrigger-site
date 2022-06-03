import type { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { Config } from '../../hypetrigger/src/configs'
import Layout from '../components/Layout'
import { DISCORD_INVITE } from '../fetch/discord'
import { getConfig, getConfigIds } from '../fetch/game-configs'
import { getGameInfo, IGDBGameInfo } from '../fetch/igdb'
import { getCoverImg } from '../fetch/igdb-img'
import styles from '../styles/Games.module.scss'

type GameItem = {
  config: Config
  gameInfo: IGDBGameInfo | null
}

export const getStaticProps = async () => {
  const configs = getConfigIds().map(getConfig)
  const games: GameItem[] = await Promise.all(
    configs.map(async config => ({
      config,
      gameInfo: (await getGameInfo(config)) ?? null,
    }))
  )

  return {
    props: {
      games,
    },
  }
}

export type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ games }: InferredProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredGames =
    searchQuery === ''
      ? games
      : games.filter(
          game =>
            game.config.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            game.config.id.toLowerCase().includes(searchQuery.toLowerCase())
        )

  return (
    <Layout>
      <div className={styles.gamesWrapper}>
        <h1>Supported Games</h1>
        <p>
          Optimized configs for all of these games come with Hypetrigger by
          default.
        </p>
        <p>
          If your game isn't supported,{' '}
          <a href={DISCORD_INVITE} target="blank">
            request it on Discord
          </a>
          . Check out the JSON config files for each of this games in the{' '}
          <a
            href="https://github.com/nathanbabcock/hypetrigger-configs"
            target="blank"
          >
            <code>hypetrigger-configs</code> repo on Github
          </a>
          .
        </p>

        <input
          type="text"
          className={styles.search}
          placeholder="Search..."
          onInput={event => setSearchQuery(event.currentTarget.value)}
        />
        <div className={styles.games}>
          {filteredGames.length === 0 && (
            <div className={styles.empty}>
              <p>No games found for search term "{searchQuery}".</p>
              You can{' '}
              <a href={DISCORD_INVITE} target="blank">
                requesting support for your game on Discord
              </a>
              , or{' '}
              <a href="/custom-configs">
                add it yourself with a custom config!
              </a>
            </div>
          )}

          {filteredGames.map(game => (
            <a
              href={`/games/${game.config?.id}`}
              className={styles.game}
              key={game.config.id}
            >
              <img
                className={styles.cover}
                src={getCoverImg(game.gameInfo?.cover.image_id)}
                alt=""
              />
              <div className={styles.gameRight}>
                <strong className={styles.gameName}>{game.config.title}</strong>
                <span className={styles.gameTriggers}>
                  {game.config.triggers?.length ?? 0} trigger
                  {game.config.triggers?.length !== 1 ? 's' : ''}
                </span>
                {(game.config.triggers?.length ?? 0) > 0 && (
                  <ul className={styles.triggerList}>
                    {game.config.triggers.slice(0, 3).map(trigger => (
                      <li key={trigger.id}>{trigger.title}</li>
                    ))}
                    {game.config.triggers.length > 3 && (
                      <li className={styles.more}>
                        + {game.config.triggers.length - 3} more triggers...
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}
