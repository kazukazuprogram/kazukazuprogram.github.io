import Head from 'next/head'
import { Component } from 'react'
import styles from '../../styles/Home.module.css'
import Header from "./header"

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>CabbageLettuce's page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className={styles.main}>
          {this.props.children}
        </main>
        <footer className={styles.footer}>
          Thank you!
        </footer>
      </div>
    )
  }
}
