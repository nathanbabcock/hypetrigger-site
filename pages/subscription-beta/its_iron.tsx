import Layout from '../../components/Layout'
import formatTime from '../../util/formatTime'
import rawClips from './its_iron.json'
import type { Clip } from '../../../hypetrigger/src/stores/clips'
import { useState } from 'react'
import styles from '../../styles/StreamSummary.module.scss'
import clsx from 'clsx'

const STREAM_URL = 'https://www.twitch.tv/videos/1507707022'
const DURATION = 7 * 60 * 60

export default function Iron() {
  const clips: Omit<Clip, 'inputPath'>[] = []
  for (const clip of rawClips) {
    if (clips.length === 0) {
      clips.push(clip)
      continue
    }
    if (
      clips[clips.length - 1].type === 'warzone-victory' &&
      clip.type === 'warzone-victory'
    )
      continue
    if (clips[clips.length - 1].triggerTime < clip.triggerTime - 1)
      clips.push(clip)
    else clips[clips.length - 1].triggerTime = clip.triggerTime
  }

  const [filter, setFilter] = useState<string | undefined>()
  const filteredClips = filter
    ? clips.filter(clip => clip.type === filter)
    : clips

  return (
    <Layout>
      <div className={styles.timeline}>
        {filteredClips.map((clip, index) => (
          <a
            key={index}
            className={clsx(styles.clip, styles[clip.type])}
            style={{ left: `${(clip.triggerTime / DURATION) * 100}%` }}
            href={`${STREAM_URL}?t=${Math.floor(clip.triggerTime)}s`}
            title={`${formatTime(Math.floor(clip.triggerTime))} ${clip.type}`}
            target="blank"
          />
        ))}
      </div>
      <p>
        Showing {filteredClips.length} of {clips.length} event timestamps
        detected from this stream:{' '}
        <a href={STREAM_URL} target="blank">
          {STREAM_URL}
        </a>
        .
      </p>
      <label>
        <select onChange={event => setFilter(event.currentTarget.value)}>
          <option value="">All events</option>
          <option value="warzone-kill">Kills</option>
          <option value="warzone-death">Deaths</option>
          <option value="warzone-victory">Wins</option>
        </select>
      </label>

      <ul>
        {filteredClips.map((clip, index) => (
          <li key={index}>
            <a
              href={`${STREAM_URL}?t=${Math.floor(clip.triggerTime)}s`}
              target="blank"
              className={styles.timestampLink}
            >
              <code>{formatTime(Math.floor(clip.triggerTime))}</code>{' '}
              <span className={styles[clip.type]}>{clip.type}</span>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
