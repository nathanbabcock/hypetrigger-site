import { ReactNode } from 'react'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  inject?: ReactNode
  children?: ReactNode
}

export default function Layout({ inject, children }: LayoutProps) {
  return (
    <>
      {inject}
      <div className={styles.wrapper}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  )
}
