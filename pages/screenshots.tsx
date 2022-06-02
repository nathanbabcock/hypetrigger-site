import clsx from 'clsx'
import { InferGetStaticPropsType } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
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
    <Layout>
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
    </Layout>
  )
}
