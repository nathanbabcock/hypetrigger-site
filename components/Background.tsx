import { useState, useEffect } from 'react'
import styles from '../styles/Background.module.scss'

export type BackgroundProps = {
  src: string
}

export const PARALLAX = 0.4
export default function Background({ src }: BackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

  return (
    <div className={styles.background}>
      <img
        alt=""
        src={src}
        className={styles.img}
        style={{ marginTop: `${scrollY * PARALLAX}px` }}
      />
      <div className={styles.gradient} />
    </div>
  )
}
