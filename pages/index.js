import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CabbageLettuce's page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello!<br/>
        <Link href="/linkSample">
          <a>This is link.</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Thank you!
      </footer>
    </div>
  )
}
