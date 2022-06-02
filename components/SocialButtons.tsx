import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { fetchDiscordJson, DISCORD_INVITE } from '../fetch/discord'
import styles from '../styles/SocialButtons.module.scss'

export default function SocialButtons() {
  const [discordPresenceCount, setDiscordPresenceCount] = useState<
    number | undefined
  >()

  useEffect(() => {
    ;(async () => {
      const json = await fetchDiscordJson()
      setDiscordPresenceCount(json.presence_count)
    })()
  }, [])

  return (
    <div className={styles.socialButtons}>
      <a
        className={clsx(styles.btn, styles.techcrunch)}
        href="https://techcrunch.com/2021/09/10/3-methodologies-for-automated-video-game-highlight-detection-and-capture/"
        target="blank"
      >
        <img src="/img/techcrunch.svg" alt="" />
        <div className={styles.middle}>
          <div className={styles.feat}>Featured on</div>
          <div className={styles.name}>Techcrunch</div>
        </div>
      </a>

      <a
        className={styles.productHunt}
        href="https://www.producthunt.com/posts/clip-it?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-clip-it"
        target="blank"
      >
        <img
          // src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308804&theme=light"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=308804&theme=dark"
          alt="Featured on Product Hunt"
          width="250"
          height="54"
        />
      </a>

      <a
        className={clsx(styles.btn, styles.discord)}
        href={DISCORD_INVITE}
        target="blank"
      >
        <img src="/img/discord.svg" alt="" />
        <div className={styles.middle}>
          <div className={styles.feat}>
            {discordPresenceCount ? 'members online' : undefined}
          </div>
          <div className={styles.name}>Discord</div>
        </div>
        {discordPresenceCount && (
          <div className={styles.count}>
            <div className={styles.online} />
            <div className={styles.value}>{discordPresenceCount}</div>
          </div>
        )}
      </a>
    </div>
  )
}
