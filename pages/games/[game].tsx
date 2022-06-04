import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import type FilterFunction from '../../../hypetrigger/src/filters/FilterFunction'
import type ThresholdFilter from '../../../hypetrigger/src/filters/ThresholdFilter'
import type { RegexParser } from '../../../hypetrigger/src/lib/ParseFunction'
import Background from '../../components/Background'
import Layout from '../../components/Layout'
import { getConfig, getConfigIds } from '../../fetch/game-configs'
import { getGameInfo } from '../../fetch/igdb'
import { getCoverImg, getFullImg } from '../../fetch/igdb-img'
import styles from '../../styles/Game.module.scss'
import cleanConfigTitle from '../../util/cleanConfigTitle'

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
    fallback: false,
  }
}

const getFilterRGB = (filter?: FilterFunction) => {
  if (filter?.type !== 'threshold') return 'none'
  const threshold = filter as ThresholdFilter
  return `rgb(${threshold.r}, ${threshold.g}, ${threshold.b})`
}

type InferredProps = InferGetStaticPropsType<typeof getStaticProps>
export default function GamePage({ config, gameInfo }: InferredProps) {
  const year =
    gameInfo && new Date(gameInfo.first_release_date * 1000).getFullYear()

  const gameName = gameInfo ? gameInfo.name : cleanConfigTitle(config.title)

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
          <a href="/games" className={styles.back} title="Back to games">
            Games/
          </a>
          <h1>{config.title}</h1>
          <p className={styles.numTriggers}>
            {config.triggers.length} trigger
            {config.triggers.length !== 1 && 's'}
          </p>
        </div>
      </div>

      <section className={styles.howTo}>
        <h2>How to automatically record {gameName} clips</h2>

        <ul>
          <li>
            <strong>Step 1:</strong>{' '}
            <a href="/#download">Download Hypetrigger</a>
          </li>
          <li>
            <strong>Step 2:</strong> Select config <code>{config.title}</code>{' '}
            from the dropdown box in the bottom left
          </li>
          <li>
            <strong>Step 3:</strong> Select which triggers you'd like to use.{' '}
            <a href="#triggers">See the full list below</a>.
          </li>
          <li>
            <strong>Step 4:</strong> Add your pre-recorded videos to the input
            panel on the left.
          </li>
          <li>
            <strong>Step 5:</strong> Click{' '}
            <strong className={styles.findClips}>Find Clips</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2 id="triggers">Triggers</h2>
        <div className={styles.triggers}>
          {config.triggers?.map(trigger => (
            <div className={styles.trigger} key={trigger.id}>
              <div
                className={styles.triggerDiagram}
                title="The smaller green rectangle is the region of the screen captured by this trigger"
              >
                <div
                  className={styles.cropRegion}
                  style={{
                    width: `${trigger.cropFunction.width}%`,
                    height: `${trigger.cropFunction.height}%`,
                    left: `${trigger.cropFunction.x}%`,
                    top: `${trigger.cropFunction.y}%`,
                  }}
                />
              </div>
              <div className={styles.triggerRight}>
                <h3 className={styles.triggerHeading}>
                  <span className={styles.triggerTitle}>{trigger.title}</span>
                  <span className={styles.triggerId}>{trigger.id}</span>
                </h3>
                <p>
                  <strong>Crop: </strong>
                  <code>
                    {Math.round((trigger.cropFunction.width / 100) * 1920)}x
                    {Math.round((trigger.cropFunction.height / 100) * 1080)}
                  </code>{' '}
                  @{' '}
                  <code>
                    ({Math.round((trigger.cropFunction.x / 100) * 1920)},{' '}
                    {Math.round((trigger.cropFunction.y / 100) * 1080)})
                  </code>
                </p>
                <p>
                  <strong>Filter: </strong>
                  <code>
                    {getFilterRGB(trigger.filters[0]) !== 'none' && (
                      <span
                        className={styles.swatch}
                        style={{
                          backgroundColor: getFilterRGB(trigger.filters[0]),
                        }}
                      />
                    )}
                    {getFilterRGB(trigger.filters[0])}
                  </code>
                </p>

                <p>
                  <strong>Parse: </strong>
                  <code>
                    {trigger.parser?.type === 'regex'
                      ? (trigger.parser as RegexParser).regex.toString()
                      : 'none'}
                  </code>
                </p>

                <p>
                  <strong>Clip: </strong>
                  <code>
                    {trigger.secondsBefore + trigger.secondsAfter}
                  </code>{' '}
                  seconds (<code>{trigger.secondsBefore}s</code> before +{' '}
                  <code>{trigger.secondsAfter}s</code> after)
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
