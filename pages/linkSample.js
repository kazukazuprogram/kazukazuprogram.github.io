import { Component } from 'react'
import Link from 'next/link'

export default class LinkSample extends Component {
  render() {
    return (
      <div>
        This is link sample page.
        <Link href="/">
          <a>Return.</a>
        </Link>
      </div>
    )
  }
}
