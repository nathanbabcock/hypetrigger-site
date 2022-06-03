import DiscordWidget from '../components/DiscordWidget'
import Layout from '../components/Layout'
import { DISCORD_INVITE } from '../fetch/discord'
import styles from '../styles/Discord.module.scss'

export default function DiscordPage() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <DiscordWidget />
        <a href={DISCORD_INVITE} target="blank" className="btn-lg">
          Join
        </a>
      </div>
    </Layout>
  )
}
