import styles from '../styles/Background.module.scss'

export type BackgroundProps = {
  src: string
}

export default function Background({ src }: BackgroundProps) {
  return (
    <div className={styles.background}>
      <img alt="" src={src} className={styles.img} />
      <div className={styles.gradient} />
    </div>
  )
}
