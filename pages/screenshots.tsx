import clsx from 'clsx'
import { InferGetStaticPropsType } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import getScreenshots from '../fetch/screenshots'
import styles from '../styles/Screenshots.module.scss'

export const getStaticProps = async () => ({
  props: {
    screenshots: getScreenshots(),
  },
})

export type ScreenshotProps = InferGetStaticPropsType<typeof getStaticProps>
export default function Screenshots({ screenshots }: ScreenshotProps) {
  return (
    <div className="wrapper">
      <Header />
      <h1 className={styles.h1}>Screenshots</h1>
      <div className={styles.screenshots}>
        {screenshots.map(url => (
          <a key={url} href={url} target="blank">
            <img
              src={url}
              alt={url}
              className={clsx('screenshot', styles.screenshot)}
            />
          </a>
        ))}
      </div>
      <Footer />
    </div>
  )
}
