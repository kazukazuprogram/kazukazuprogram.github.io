import { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/description">
          <a>Description</a>
        </Link>
      </div>
    )
  }
}
